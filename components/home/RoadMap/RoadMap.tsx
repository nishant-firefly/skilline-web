import { Heading } from '@/components/core'
import Image from 'next/image'
import React from 'react'

export const RoadMap = () => {
  return (
    <div className='container text-center pt-5'>
        <Heading>Roadmap <span className='text-[#1D70A2]'>Business Process</span></Heading>
        <div>
            <Image src="/revision/Skilline.svg" width={1024} height={1024} alt='' className='m-auto'/>
        </div>
    </div>
  )
}
