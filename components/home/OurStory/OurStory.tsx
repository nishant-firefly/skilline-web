import { ImageBoxStyle } from '@/components/core';
import React from 'react'

export const OurStory = () => {
    const json = {
        data: {
          image: {
            url: "/revision/our_story.jpg",
            width: 1024,
            height: 1024,
            size: ""
          },
          title: "Our story",
          description: `Skilline began as a traditional education provider post-pandemic in 2022, delivering impactful offline technology courses that enhanced skills and job readiness. Achieving notable milestones, we trained over 200 students and secured partnerships with leading companies. `,
          button: {
            label: "Find Out More",
            url: "/our-story",
            target: "_self" as "_self",
          }
        },
        imageAlign: "left" as "left",
      };
  return (
    <div className="md:pb-[10px] md:mt-[30px]">
       <ImageBoxStyle 
       data={json.data} imageAlign={json.imageAlign}
       />
      </div>
  )
}
