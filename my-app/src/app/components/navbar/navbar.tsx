import React from 'react'
import Link from 'next/link'

import './navbar.css'

const Navbar = () => {
  return (
    <nav className="NavbarComponent">
      <div className="NavbarComponent-in">
        <div className="nav-one">
            <img src="/logo.svg" alt="" />
        </div>
        <div className="nav-two">
            <Link href="/">About us</Link>
            <Link href="/">Projects</Link>
            <Link href="/">FAQ's</Link>
            <Link href="/">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar