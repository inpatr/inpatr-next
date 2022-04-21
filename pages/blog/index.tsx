import Link from 'next/link'
import { GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import { useState } from 'react'

// need to have this name!
export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetch('http://localhost:8000/feed').then((res) =>
    res.json()
  )
  return {
    props: {
      posts,
    },
  }
}

export type Post = {
  id: number
  title: string
  author: {
    id: number
    name: string
    email: string
  }
  content: string
}

interface Props {
  posts: Post[]
}

const Blog = ({ posts }: Props) => {
  const [query, setQuery] = useState('')

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
          <Link key={post.id} href={`/blog/${post.title}`}>
            <a className="mt-4">
              <div className="flex flex-col border border-lightblue rounded-md max-w-xs">
                <h1 className="text-2xl">{post.title}</h1>
                <p>{post.author.name}</p>
                <p>{post.author.email}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog
