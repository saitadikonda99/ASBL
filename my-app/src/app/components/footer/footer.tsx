import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import './footer.css'

import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="FooterComponent">
            <div className="FooterComponent-in">
                <div className="footer-one">
                    <div className="footer-one-one">
                        <Link href="https://www.linkedin.com/">
                            <FaLinkedin size={20} />
                        </Link>

                        <Link href="https://www.instagram.com/">
                            <FaInstagram size={20} />
                        </Link>

                        <Link href="https://x.com/">
                            <FaXTwitter size={20} />
                        </Link>

                        <Link href="https://www.youtube.com/">
                            <FaYoutube size={20} />
                        </Link>
                    </div>
                    <div className="footer-one-two">
                        <Link href="/cookies-privacy-policy">Cookies & Privacy Policy</Link>
                        <Link href="/terms-conditions">Terms & Conditions</Link>
                        <Link href="/refunds-cancellations">Refunds / Cancellations</Link>
                    </div>
                </div>
                <div className="footer-two">
                    <div className="footer-two-one">
                        <Image
                            src="/ASBL-Footer.webp"
                            alt="ASBL Logo"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="footer-two-two">
                        <div className="footer-nav-one footer-nav-cm">
                            <Link href="/">OUR STORY</Link>
                            <Link href="/">OUR PROJECTS</Link>
                            <Link href="/">ENQUIRE</Link>
                        </div>
                        <div className="footer-nav-tw footer-nav-cm">
                            <Link href="/">BLOGS</Link>
                            <Link href="/">MEDIA</Link>
                            <Link href="/">CONTACT US</Link>
                        </div>
                        <div className="footer-nav-three footer-nav-cm">
                            <Link href="/">EVENTS</Link>
                            <Link href="/">CAREERS</Link>
                            <Link href="/">WORKSHOPS</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-three">
                    <p>© ASBL ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer