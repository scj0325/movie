'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
export default function postpage() {
  const [todo, settodo] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => settodo(data.posts))
  }, [])
  return (
    <ul>
      {todo.map((item) => (
        <li key={item.id}>
          <Link href={`/posts/${item.id}`}>
            {item.id} / {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
