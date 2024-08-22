import React from 'react'
import { Link } from 'react-router-dom'
export default function Blogpage() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
     Blog Page
    </h1>
      <Link to={"/"} >Home</Link>
    </>
  )
}
