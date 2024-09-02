import { ImageBoxStyle } from '@/components/core'
import React from 'react'

export const AIDriven = () => {
  return (
    <div className="md:pb-[50px]">
      <ImageBoxStyle
        data={{
          image: {
              url: "/image/images/AI_Big Data.jpg",
              width: 1024,
              height: 1024,
              size: ""
          },
          title: "AI-Driven Learning Experience",
          description: `Our platform uses AI to provide instant, customized feedback in
various Indian languages making it inclusive and accessible. The
rural user can learn through video and audio learning which is a
great thing of benefits over there educational experience.`,
      }} imageAlign="left"
      />
    </div>
  )
}
