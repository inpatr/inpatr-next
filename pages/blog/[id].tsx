import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import { Post } from '.'
import md from 'markdown-it'

interface Props {
  post: Post
}

export default function BlogPost({ post }: Props) {
  return (
    <div
      className="mx-auto prose"
      dangerouslySetInnerHTML={{ __html: md().render(post.content) }}
    />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  let posts: Post[] = await fetch('http://localhost:8000/feed').then((res) =>
    res.json()
  )
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id
  const post = await fetch(`http://localhost:8000/posts/${id}`).then((res) =>
    res.json()
  )
  return {
    props: {
      post,
    },
  }
}
