'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function postdetail() {
  const { id } = useParams()

  return <>{id}번 게시글 상세페이지</>
}
