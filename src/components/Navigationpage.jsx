import React from 'react'
import Blogpage from '../pages/Blogpage'
import Homepage from '../pages/Homepage'
import { Link } from 'react-router-dom'



export default function Navigationpage() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Blog">Blog</Link>
    </div>
  )
}
