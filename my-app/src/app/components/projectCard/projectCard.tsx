"use client"
import React from 'react'
import Image from 'next/image'

import './projectCard.css'

interface ProjectCardProps {
  id?: number;
  imageSrc?: string;
  title?: string;
  description?: string;
  features?: string[];
}

const ProjectCard = ({ id, imageSrc, title, description, features }: ProjectCardProps   ) => {
  
    const handleClick = () => {
        window.location.href = `/projectView/${id}`;
    }

    console.log("ProjectCard features:", id);

    return (
        <div className="ProjectCardComponent" onClick={handleClick}>
            <div className="ProjectCardComponent-in">
                <div className="projectcard-one">
                     <Image
                        src={imageSrc || "/projects/1.webp"}
                        alt="Project Image"
                        width={400}
                        height={300}
                    />
                </div>
                <div className="projectcard-two">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="projectcard-three">
                    <p>{features?.[0]}</p>
                    <p>{features?.[1]}</p>
                    <p>{features?.[2]}</p>
                </div>
            </div>
        </div>
  )
}

export default ProjectCard