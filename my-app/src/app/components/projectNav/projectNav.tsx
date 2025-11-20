import React from 'react'
import Link from 'next/link'

import './projectNav.css'

const projectNav = () => {
    return (
        <div className="ProjectNavComponent">
            <div className="ProjectNavComponent-in">
                <div className="projectNav-one">
                    <img src="/logo.svg" alt="" />
                </div>
                <div className="projectNav-two">
                    <Link href="/">Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default projectNav