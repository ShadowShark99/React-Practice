import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HomeButton.css"
const HomeButton = () => {
  return (
    <div>
      <Link className="home-button" to="/">Back To Home Page</Link>
    </div>
    
  )
}

export default HomeButton