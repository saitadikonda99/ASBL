"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import './navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 90; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="NavbarComponent">
        <div className="NavbarComponent-in">
          <div className="nav-one">
              <img src="/logo.svg" alt="" />
          </div>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Links */}
          <div className={`nav-two ${isMenuOpen ? 'active' : ''}`}>
              <Link href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Home</Link>
              <Link href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</Link>
              <Link href="#faqs" onClick={(e) => { e.preventDefault(); scrollToSection('faqs'); }}>FAQ's</Link>
              <Link href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</Link>
          </div>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </>
  )
}

export default Navbar