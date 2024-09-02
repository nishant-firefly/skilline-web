import { Breadcrumb, Heading, ImageBox, Paragraph, UnorderedList } from '@/components/core'
import { OurImpact, Policies } from '@/components/home';
import { Pillars } from '@/components/home-v2'
import Image from 'next/image';
import React from 'react'

const Page = () => {
    const data = [
        {
            title: "Economy",
            description:
                "Skilline is a platform that seeks to train the workforce here in the country in the most innovative ways, with the main goal being maximum productivity to make the country self-sufficient, increase the economy by providing more employment and self-employment opportunities, and promote a so-called “Skilline, the Youth of India'' brand to the world.",
            image: "/image/images/Economy.jpeg",
            color: "orange",
        },
        {
            title: "Infrastructure",
            description:
                "Skilline will take advantage of the India AI Mission with technology that consists of AI and Gen AI servers for building up data banks of knowledge and an individualized pedagogy solution that can scale. Inclusivity, innovation, and social impact should expand, thereby reinforcing the country's global influence. One of our long-term aims is to establish a self-sustaining Indigenous University so that what is learned becomes the real commodity in this country.",
            image: "/image/images/Infrastructure.jpg",
            color: "green",
        },
        {
            title: "System",
            description:
                "The fact that Skilline is conceptualized as an energy repository and educational ecosystem where students can learn in their languages, not only AI but also Gen AI knowledge servers, will allow knowledge base ingestion to be the first of all the dispersed machines. The system-obtained knowledge will occur in sync with the demands of each student, making them well- acquainted with ideas about today's and most future innovative technologies.",
            image: "/image/images/System.jpeg",
            color: "blue",
        },
        {
            title: "Vibrant Demography Skills",
            description:
                "The national educational platform that offers bilingual education services caters to different target audiences, including youth, office workers, rural residents, corporations, manufacturing centers, the government, and policymakers. The company is already in partnership with award- winning businesses in Australia and with Australian entrepreneurs who are certified for global expansion.",
            image: "/image/images/Vibrant Demography Skills.jpeg",
            color: "yellow",
        },
        {
            title: "Demand",
            description:
                "Skilline is the leading supplier of on-demand skills and training courses, which is part of our country's effort to train employees on the job or in vocational schools to a level that guarantees employment or entrepreneurship. Our ultimate goal is to become one of the top course providers for a learning experience where students get to explore, validate, and enroll in personalized courses on demand.",
            image: "/image/images/Demand.jpeg",
            color: "gray",
        },
    ];

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
                        label: "Alignment with Government Policies",
                        link: "/alignment-with-government-policies",
                        isActive: true,
                    },
                ]}
            >
                Alignment with Government Policies
            </Breadcrumb>
            <div className='py-10'>
                <Pillars />
            </div>
            <div className="container">
                <div className="space-y-10">
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
            </div>
            <div className="container">
                <div className="flex flex-col md:flex-row py-[50px] items-center">
                    <div className="md:w-1/2 w-full">
                        <Image
                            src="/image/images/Boosting the Future 2.jpeg"
                            width={1000}
                            height={1000}
                            alt=""
                            className="rounded-lg  md:h-[480px] md:object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 w-full ">
                        <div className="space-y-6 mt-5 md:mt-0 md:pl-10">
                            <Heading>Boosting the Future of India Through Government Backed Education Initiatives</Heading>
                            <Paragraph className="!whitespace-normal">
                            Skilline is well aligned with numerous groundbreaking Indian government campaigns like Atma-Nirbhar Bharat, Skill India Digital, NSDC campaigns, and the biggest one: 100 Days AI Mission by the Institute Of The NITI Aayog. Our modules are carefully built to comply with government board curriculums, and they match national goals for skill development completely.{" "}
                            </Paragraph>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container ">
        <div className="md:text-center space-y-5 md:px-[10%]">
          <Heading className="">Empower Skill India</Heading>
          <Paragraph className="!whitespace-normal">
            {`Skilling in an organized, multilingual, and AI-powered method. We provide personalized learning in real-time for everyone, using AI technology and available on all screens. This initiative is aimed at enabling a world- class resource pool of professionals who can not only build solutions but also help provide the essential skills for India's workforce in this digital age, thereby increasing employability and contributing to developing economies.`}
          </Paragraph>
        </div>
        <div className="flex flex-col md:flex-row pt-[20px] pb-[80px] items-center">
          <div className="md:w-1/2 w-full">
            <Image
              src="/image/images/benifits.png"
              width={1000}
              height={1000}
              alt=""
              className="md:h-[500px] md:object-cover rounded-[15px]"
            />
          </div>
          <div className="md:w-1/2 w-full ">
            <div className="space-y-6 mt-5 md:pt-0 md:pl-10">
              <h4 className="font-[600] text-[30px]">Benefits </h4>

              <UnorderedList>
                <UnorderedList.Item>
                Corporate & Worker Platform for offline training and monitoring
                </UnorderedList.Item>

                <UnorderedList.Item>
                Teacher Facilitation, Training process
                </UnorderedList.Item>
                <UnorderedList.Item>
                In demand Skills. Youth in Manufacturing
                </UnorderedList.Item>

                <UnorderedList.Item>
                Skilled Assessed Pool of Workers
                </UnorderedList.Item>
                <UnorderedList.Item>
                Quality Education
                </UnorderedList.Item>
                <UnorderedList.Item>
                Multi-lingual, Rural, Ultimately
                </UnorderedList.Item>
              </UnorderedList>
              
            </div>
          </div>
        </div>
      </div>
      <OurImpact />
      <Policies />
        </div>
    )
}

export default Page;
