import Link from 'next/link'
import { GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import { useState } from 'react'

// need to have this name!
export const getStaticProps: GetStaticProps = () => {
  const files = fs.readdirSync('_posts')
  const posts = files.map((fileName) => {
    // remove .md from filenames to create dynamic part of url
    const slug = fileName.replace('.md', '')
    //get file contents
    const readFile = fs.readFileSync(`_posts/${fileName}`, 'utf-8')
    // parsing markdown and just grabbing the frontmatter
    const { data: frontMatter } = matter(readFile)
    return {
      slug,
      frontMatter,
    } // builds object with keys
  })
  return {
    props: {
      posts,
    },
  }
}

export interface FrontMatter {
  title: string
  author: string
  date: string
  image: string
  tags: string[]
}

interface Props {
  posts: {
    slug: string
    frontMatter: FrontMatter
  }[]
}

const Blog = ({ posts }: Props) => {
  const [query, setQuery] = useState('')

  const filterPosts = (post: typeof posts[0]) => {
    if (!query) {
      return true
    }
    return (
      post.frontMatter.tags
        .map((tag) => tag.toLowerCase())
        .includes(query.toLowerCase()) ||
      post.frontMatter.author.toLowerCase().includes(query.toLowerCase())
    )
  }

  return (
    <div className="h-screen space-y-10">
      {/* <div>
      <input type="search" onChange={(event) => setQuery(event.target.value)} />
      </div> */}
      <div className="mt-10 flex justify-center">
        <input
          onChange={(event) => setQuery(event.target.value)}
          type="search"
          placeholder="search blog"
          className="text-darkaltrose"
        />
      </div>
      <div className="flex space-x-5 justify-center">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`}>
            <a className="mt-4">
              <div className="flex flex-col border border-lightblue rounded-md max-w-xs">
                <img src={`${post.frontMatter.image}`} className="mb-2" />
                <h1 className="text-2xl">{post.frontMatter.title}</h1>
                <p>{post.frontMatter.author}</p>
                <div className="flex space-x-2">
                  {post.frontMatter.tags.map((tag) => (
                    <div className="bg-darkaltrose rounded-md p-1">{tag}</div>
                  ))}
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog
