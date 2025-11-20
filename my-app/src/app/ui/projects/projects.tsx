import React from 'react'

import './projects.css'

import ProjectCard from '@/app/components/projectCard/projectCard'

export const ProjectData = [
    {
        id: 1,
        imageSrc: '/projects/1.webp',
        title: 'ASBL spectra',
        description: 'Exclusive 3BHKs with Room-sized Outdoor Living Balconies',
        features: ['3BHK', '1980 sq.ft', 'Gachibowli'],
    },
    {
        id: 2,
        imageSrc: '/projects/2.webp',
        title: 'ASBL LOFT',
        description: 'Luxurious 3BHK Apartments with Modern Amenities',
        features: ['3BHK', '1695 sq.ft', 'Gachibowli'],
    },
    {
        id: 3,
        imageSrc: '/projects/3.webp',
        title: 'ASBL LANDMARK',
        description: 'Spacious Villas with Private Gardens and Pools',
        features: ['4BHK', '10 acres', 'Banjara Hills'],
    },
    {
        id: 4,
        imageSrc: '/projects/4.webp',
        title: 'ASBL BROADWAY',
        description: 'Contemporary Studio Apartments in the Heart of the City',
        features: ['4BHK', '6 acres', 'Madhapur'],
    },
];


const Projects = () => {
    return (
        <div id="projects" className="ProjectsComponent">
            <div className="ProjectsComponent-in">
                <div className="projects-one">
                    <h1>ASBL PROJECTS</h1>
                    <p>UNMISSABLE STATURE, INCOMPARABLE LIVING.</p>
                </div>
                <div className="projects-two">
                    {ProjectData.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            imageSrc={project.imageSrc}
                            title={project.title}
                            description={project.description}
                            features={project.features}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects