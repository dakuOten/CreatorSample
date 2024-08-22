import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
     Home Page
    </h1>
      <Link to={"/blog"} >Blog</Link>
    </>
  )
}
