import React from 'react'
import Image from 'next/image'

import './page.css'

const Page = () => {
  return (
    <div className="HeroComponent">
      <div className="HeroComponent-in">
        <div className="hero-one">
          <div className="home-one-one">
            <Image
              src="/ASBL.png"
              alt="ASBL Logo"
              width={500}
              height={300}
            />
          </div>
          <div className="home-one-two">
            <div className="home-one-two-one">
              <h1>YOU</h1>
            </div>
            <div className="home-one-two-two">
              <p>WE MAKE HOMES</p>
            </div>
            <div className="home-one-two-three">
              <p>THAT UNDERSTAND <span>YOU</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page