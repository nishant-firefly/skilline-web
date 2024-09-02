import { ImageBoxStyle } from '@/components/core'
import React from 'react'

export const SkillGap = () => {
  return (
    <div className="py-5">
      <ImageBoxStyle
        data={{
          image: {
              url: "/image/images/skill-gap-blocks.jpg",
              width: 1024,
              height: 1024,
              size: ""
          },
          title: "Our Vision",
          description: `We envision a future where every individual in India has the opportunity to thrive and contribute to the nation's progress. Our aim is to provide equitable access to education, ensuring that everyone, regardless of their background, can succeed. We strive to empower individuals to become skilled, self-sufficient, and confident, fostering a robust workforce that drives national growth and prosperity.`,
      }} imageAlign="right"
      />
    </div>
  )
}
