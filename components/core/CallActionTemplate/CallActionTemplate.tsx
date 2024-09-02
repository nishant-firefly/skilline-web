import { Heading, Paragraph } from '@/components/core';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


type CallActionItem = {
    heading: string;
    description: string;
    button: {
        url: string;
        label: string;
        target: "_self" | "_blank"
    }
}

type CallActionTemplate = {
    action: CallActionItem;
}

export const CallActionTemplate = ({ action }: CallActionTemplate) => {
    return (
        <div className='container'>
            <div className='text-center space-y-5 md:w-[70%] w-full md:m-auto py-10'>
                <Heading>{action.heading}</Heading>
                <Paragraph>{action.description}</Paragraph>
                <Button asChild={true}>
                    <Link href={action.button.url} target={action.button.target}>{action.button.label} <span className='ml-2'><FaArrowRightLong /></span></Link>
                </Button>
            </div>
            
        </div>
    )
}
