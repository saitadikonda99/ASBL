"use client"
import React from 'react'
import Image from 'next/image'

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import './faqs.css'

const FAQsData = [
    {
        id: 1,
        question: "What is ASBL?",
        answer: "ASBL is an innovative housing solution that integrates advanced hydrogen energy storage technology to provide sustainable and efficient living environments."
    },
    {
        id: 2,
        question: "How does hydrogen energy storage work?",
        answer: "Hydrogen energy storage works by converting excess energy into hydrogen through electrolysis. This hydrogen can then be stored and later converted back into electricity when needed, providing a clean and efficient energy source."
    },
    {
        id: 3,
        question: "What are the benefits of using ASBL homes?",
        answer: "ASBL homes offer numerous benefits including reduced carbon footprint, lower energy costs, enhanced energy security, and the ability to utilize renewable energy sources effectively."
    },  
    {
        id: 4,
        question: "Is ASBL technology safe?",
        answer: "Yes, ASBL technology adheres to strict safety standards and protocols to ensure the safe storage and use of hydrogen energy within residential settings."
    }
] 

const faqs = () => {

    const [currentOpen, setCurrentOpen] = React.useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        if (currentOpen === index) {
            setCurrentOpen(null);
        } else {
            setCurrentOpen(index);
        }
    };

  return (
        <div id="faqs" className="FAQsComponent">
            <div className="FAQsComponent-in">
                <div className="faqs-one">
                    <div className="faqs-one-one">
                        <h1>FAQs About <span>ASBL</span></h1>
                    </div>
                    {FAQsData.map((faq, index) => (
                        <div key={faq.id} className="faqs-bar">
                            <div 
                                className="faqs-bar-one"
                                onClick={() => toggleFAQ(index)}
                            >
                                <p>{faq.question}</p>
                                {currentOpen === index ? (
                                    <MdKeyboardArrowUp size={20} />
                                ) : (
                                    <MdOutlineKeyboardArrowDown size={20} />
                                )}
                            </div>
                            {currentOpen === index && (
                                <div className="faqs-bar-two">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="faqs-two">
                    <div className="faqs-two-one">
                        <Image
                            src="/FAQs.webp"
                            alt="FAQs Image"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default faqs