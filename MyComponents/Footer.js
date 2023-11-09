
import React from 'react'

export  const Footer = () => {
  const footerstyle ={
    position: "relative",
    top: "100vh",
    width: "100%",
   border : "2px solid limegreen"
  }
  return (
    <footer className= "bg-dark text-light py-3"  style ={footerstyle} >
      <p className = "text-center">
      copyright&copy;MyTodoslist.com
      </p>
    </footer>
  )
  }


