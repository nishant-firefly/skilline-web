import { CallActionTemplate } from '@/components/core'
import React from 'react'

export const CallAction = () => {

    const data = {
        heading: "Enroll in our cutting-edge courses to upskill and enhance your career prospects.",
        description: "Take advantage of our job-guaranteed training programs, and partner with us or contribute to our mission through donations and volunteering.",
        button: {
            url: "/contact-us",
            label: "Enquiry",
            target: "_self" as "_self" | "_blank"
        }
    }

    return (
        <>
            {data? (
                <CallActionTemplate
                    action={data}
                />
            ) : (<span>Call To Action Component Not Found</span>)}
        </>
    )
}
