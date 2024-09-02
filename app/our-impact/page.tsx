import { Breadcrumb, Heading, ImageBoxStyle, Paragraph } from '@/components/core'
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
                        label: "Our Impact",
                        link: "/our-impact",
                        isActive: true,
                    },
                ]}
            >
                Our Impact
            </Breadcrumb>
            <div className='py-10'>
                <ImageBoxStyle
                    data={{
                        image: {
                            url: "/revision/ai-powered.jpg",
                            width: 671,
                            height: 521,
                            size: ""
                        },
                        title: "Democratize AI-powered education",
                        description: `Skilline has transformed lives by making people from diverse backgrounds job-ready. Our graduates are employed by leading companies in Singapore and the US, including NYSE-listed firms. Indian startups and million-dollar clients are also using our skilled professionals in their projects, showcasing the real-world impact and success of our AI-driven training platform.`,
                    }} imageAlign="left"
                />
            </div>
            <div className='py-10 container'>
                <div  className='md:space-y-0 space-y-5 flex md:flex-nowrap flex-wrap gap-10'>
                    <div className='flex justify-around flex-col md:w-6-12 w-full'>
                        <Heading>Our Vision</Heading>
                        <Paragraph>Our vision is to create equitable opportunities for all, fostering nationwide prosperity and growth.</Paragraph>
                        <Heading>Our Mission</Heading>
                        <Paragraph>{`Skilline's mission is to revolutionize Bharat's education with affordable, AI-driven, personalized training, narrowing skill gaps and empowering rural youth.`}</Paragraph>
                    </div>
                    <div className='md:w-6-12 w-full  md:order-2 order-1'>
                        <Image src="/revision/our-vision-our-mission.jpg" alt='our-vision-our-mission' width={594} height={441} />
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <ImageBoxStyle
                    data={{
                        image: {
                            url: "/revision/transformin-education.jpg",
                            width: 631,
                            height: 481,
                            size: ""
                        },
                        title: "Transforming Education",
                        description: `Skilline is building AI and gamification to deliver a unique, personalized learning experience. Our platform offers high-quality education supporting rural languages of Bharat, tailored to each bhartiya’s needs and career aspirations. By aligning with industry requirements and government initiatives like Atma Nirbhar Bharat and Skill India, we ensure learners are job-ready and confident in their skills.`,
                    }} imageAlign="left"
                />
            </div>
            <div className="container pt-10 pb-[80px] flex md:flex-row  flex-col-reverse">
        <div className="md:w-1/2 w-full xl:pt-0 lg:pt-0 md:pt-0 pt-5">
          <Heading>Primary Benefits and Outcomes for Users</Heading>
          <Paragraph className="space-y-8 pt-5">
            <div>
              <h2 className="font-[600]">Personalized Learning:</h2>
              <Paragraph>Customised educational experiences that cater to individual goals and learning paces.</Paragraph>
            </div>
            <div>
            <h2 className="font-[600]">Rural Language Support:</h2>
            <Paragraph>High-quality training available in multiple Indian languages, ensuring inclusivity.</Paragraph>
            </div>
            <div>
            <h2 className="font-[600]">Job-Ready Skills:</h2>
            <Paragraph>Training in high-demand sectors like technology and manufacturing, with 100% job guarantees.</Paragraph>
            </div>
            <div>
            <h2 className="font-[600]">Economic Empowerment:</h2>
            <Paragraph>Enhanced employability and self-employment opportunities, driving economic independence.</Paragraph>
            </div>
            <div>
              <h2 className="font-[600]">Government Alignment:</h2>
              <Paragraph>Programs that support Atma Nirbhar Bharat and Skill India, contributing to national skill development.</Paragraph>
            </div>
          </Paragraph>
        </div>
        <div className="md:w-1/2 w-full md:pl-10">
          <Image
            src="/image/images/Solutions.jpg"
            alt=""
            width={1024}
            height={1024}
            className="border sticky top-[100px] rounded-[15px]"
          />
        </div>
      </div>
        </div>
    )
}

export default Page
