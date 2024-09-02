import { Breadcrumb} from '@/components/core'
import { GridBox } from '@/components/core/GridBox'
import Image from 'next/image'
import React from 'react'

const Page = () => {
    return (
        <div>
            <Breadcrumb
                data={[
                    {
                        label: "Home",
                        link: "/",
                        isActive: false,
                    },
                    {
                        label: "Our Story",
                        link: "/our-story",
                        isActive: true,
                    },
                ]}
            >
                Our Story
            </Breadcrumb>
            <GridBox columns={1} gap={10} className='container items-center py-12 '>
            <Image src="/revision/our-story.png" alt='Our Story' title='Our Story' width={1578} height={890} />
            </GridBox>
        </div>
    )
}

export default Page
