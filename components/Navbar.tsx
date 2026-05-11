import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <a href="#" className="nav-logo">NOVA<span>VENTURES</span></a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#serve">Who We Serve</a></li>
          <li><a href="#offer">What We Offer</a></li>
          <li><a href="#technology">Technology</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-ctas">
          <a href="#" className="btn-ghost">Member Login</a>
          <a href="#contact" className="btn-gold">Open Account</a>
        </div>
    </nav>
  )
}

 

