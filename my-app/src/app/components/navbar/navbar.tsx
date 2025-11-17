"use client"
import React from 'react'
import Link from 'next/link'

import './navbar.css'

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="NavbarComponent">
      <div className="NavbarComponent-in">
        <div className="nav-one">
            <img src="/logo.svg" alt="" />
        </div>
        <div className="nav-two">
            <Link href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Home</Link>
            <Link href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</Link>
            <Link href="#faqs" onClick={(e) => { e.preventDefault(); scrollToSection('faqs'); }}>FAQ's</Link>
            <Link href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar