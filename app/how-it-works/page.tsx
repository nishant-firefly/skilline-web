import { Breadcrumb, Heading, ImageBox, Paragraph } from '@/components/core'
import { GridBox } from '@/components/core/GridBox';
import Image from 'next/image';
import React from 'react'

const Page = () => {

  const data = [
    {
      title: "Custom Learning Paths",
      description:
        "AI designs a unique learning journey for each person based on their goals, current knowledge, and performance.",
      image: "/revision/hiw1.jpg",
      color: "orange",
    },
    {
      title: "Smart Content Delivery",
      description:
        "AI chooses the best type of content—like text, videos, or interactive modules—to fit each learner’s needs.",
      image: "/revision/hiw2.jpg",
      color: "green",
    },
    {
      title: "Adaptive Assessments",
      description:
        "AI adjusts quiz and test difficulty based on how well learners are doing, offering feedback and help as needed.",
      image: "/revision/hiw3.jpg",
      color: "blue",
    },
    {
      title: "Real-Time Analytics",
      description:
        "AI monitors progress, spots areas where learners need improvement, and suggests ways to get better.",
      image: "/revision/hiw4.jpg",
      color: "yellow",
    },
    {
      title: "Virtual Tutoring",
      description:
        "AI chatbots or virtual assistants provide help and answers throughout the learning process.",
      image: "/revision/hiw5.jpg",
      color: "gray",
    },
    {
      title: "Gamification",
      description:
        "AI incorporates game-like elements such as points, badges, and leader boards to make learning more engaging and motivating.",
      image: "/revision/hiw6.jpg",
      color: "gray",
    },
    {
      title: "Trail Blazing",
      description:
        "AI encourages learners to explore new topics and skills by providing recommendations and guiding them on unique learning paths.",
      image: "/revision/hiw7.jpg",
      color: "gray",
    }
  ];

  const differentiator = [
    {
      title: "Personalize learning experiences:",
      description: "Unlike one-size-fits-all approaches, AI tailors content, pace, and difficulty to individual learner needs, enhancing engagement and effectiveness.",
    },
    {
      title: "Provide real-time feedback:",
      description: "AI offers immediate feedback on learner performance, enabling quick adjustments and accelerating learning progress.",
    },
    {
      title: "Predict learning outcomes:",
      description: "By analyzing learner data, AI can anticipate potential challenges and offer proactive support, optimizing learning efficiency.",
    },
    {
      title: "Optimize content delivery:",
      description: "AI determines the most effective content format and delivery method for each learner, maximizing comprehension.",
    },
    {
      title: "Enable continuous improvement:",
      description: "AI collects and analyzes data to refine the learning experience over time, ensuring ongoing enhancement.",
    }
  ]

  return (
    <>
      <div><Breadcrumb
        data={[
          {
            label: "Home",
            link: "/",
            isActive: false,
          },
          {
            label: "How It Works",
            link: "/how-it-works",
            isActive: true,
          },
        ]}
      >
        Skilline EcoSystem
      </Breadcrumb></div>
      <div className='container py-10'>
        <div className='space-y-10'>
          <Heading className='text-black text-pretty md:text-[30px] text-[20px] md:leading-[40px] font-normal text-center'>{`Skilline's self-learning platform uses artificial intelligence (AI) to create personalized learning experiences that adapt to each individual.`}</Heading>
          <Heading className='text-black text-pretty md:text-[30px] text-[20px] md:leading-[40px] font-normal text-center'>{`Here’s what sets it apart:`}</Heading>
        </div>
        <div className="space-y-10 mt-10">
          {data.map((item: any, index) => {
            return (
              <div key={index}>
                <ImageBox
                  data={{
                    image: item.image, 
                    title: item.title,
                    description: item.description,
                  }}
                  type="style-4"
                  imageAlign={index % 2 ? "right" : "left"}
                  color={item.color}
                  seqNumber={"0" + (index + 1)}
                />
              </div>
            );
          })}
        </div>
        <div className='space-y-12 py-10'>
          <Heading className='text-center'>Our Differentiator</Heading>
          <GridBox columns={2} gap={10} className='md:space-y-0 space-y-5 items-center bg-[#FFF8F3] p-[20px] rounded-md md:unset flex flex-col-reverse'>
            <GridBox.GridItem columnMerge={1}>
              <ul className='space-y-10'>
              {differentiator.map((item, index) => (
                <li key={index}><span className='font-semibold text-xl'>{item.title}</span><Paragraph>{item.description}</Paragraph></li>
              ))}
              </ul>
            </GridBox.GridItem>
            <GridBox.GridItem columnMerge={1} className='md:order-2 order-1'>
              <Image src="/revision/our-deifferntor.png" alt='Our Differentiator' title='Our Differentiator' width={528} height={841} className='m-auto' />
            </GridBox.GridItem>
          </GridBox>
        </div>
      </div>

    </>
  )
}

export default Page
