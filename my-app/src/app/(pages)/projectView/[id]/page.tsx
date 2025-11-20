"use client"
import React from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

import './page.css'

import Navbar from '../../../components/projectNav/projectNav'
import { ProjectData } from '@/app/ui/projects/projects'

import { PiBuildingApartment } from "react-icons/pi";
import { BsTextareaResize } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";

const projectView = () => {

  const { id } = useParams()

  const project = ProjectData.find((p) => p.id === Number(id))

  return (
    <div className="ProjectViewComponent">
      <div className="ProjectViewComponent-in">
        <Navbar />
        <div className="projectView-one">
          <h1>ASBL presents <span>{project?.title.slice(5)}</span></h1>
        </div>
        <div className="projectView-two">
          <div className="projectView-two-one">
            <Image
              src={ project?.imageSrc || "/projects/1.webp"}
              alt="Project Image"
              width={1000}
              height={800}
            />
          </div>
          <div className="projectView-two-two">
            <div className="project-about">
              <div className="project-about-one">
                <h1>{project?.title}</h1>
              </div>
              <div className="project-about-two">
                <p>{project?.description}</p>
              </div>
              <div className="project-about-three">
                    <p> <PiBuildingApartment /> {project?.features?.[0]}</p>
                    <p><BsTextareaResize /> {project?.features?.[1]}</p>
                    <p><CiLocationOn /> {project?.features?.[2]}</p>
              </div>
              <div className="project-about-four">
                <button className="download-btn"> <FaDownload /> Download Brochure</button>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projectView