
import { Breadcrumb, Heading, Paragraph } from '@/components/core';
import { OurVision, Skill_Gap_india, SkilliGap } from '@/components/empowering-future-generations';
import Image from 'next/image';
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
                        label: "Empowering Future Generations",
                        link: "/",
                        isActive: true,
                    },
                ]}
            >
                Empowering Future
            </Breadcrumb>
            <div className='md:py-0 py-10'>
            <SkilliGap />
            </div>
            {/* <GuidingPrinciple /> */}
            <div className='my-[50px]'>
            <OurVision />
            </div>
            <Skill_Gap_india />
            <div className="container pt-10 pb-[80px] flex md:flex-row  flex-col-reverse">
          <div className="md:w-1/2 w-full xl:pt-0 lg:pt-0 md:pt-0 pt-5">
            <Heading>Solutions</Heading>
            <Paragraph className="space-y-8 pt-5">
              <div>
                <h2 className="font-[600]">Education System Reform:</h2>
                <ul className="pl-5 list-type-1">
                  <li>
                  Incorporate practical and hands-on learning from an early age.
                  </li>
                  <li>
                  Move away from rote learning to prevent stunted academic growth and widen the skill gap
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-[600]">Emphasis on Vocational Skills:</h2>
                <ul className="pl-5 list-type-1">
                  <li>
                  Prioritize vocational skills, internships, and embedded apprenticeship degree programs.
                  </li>
                  <li>
                  Ensure students gain hands-on learning experiences in real-life scenarios.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-[600]">
                Industry and Academia Collaboration:
                </h2>
                <ul className="pl-5 list-type-1">
                  <li>
                  Foster a collaborative understanding between industry and academia.
                  </li>
                  <li>
                  Align the education system with current job market needs.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-[600]">
                Investment in Vocational Skilling:
                </h2>
                <ul className="pl-5 list-type-1">
                  <li>
                  Address the urgent need for investment in vocational education across the country.
                  </li>
                  <li>
                  Overcome the stigma associated with vocational education, often seen as a last resort by parents and teachers.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-[600]">Education and Awareness:</h2>
                <ul className="pl-5 list-type-1">
                  <li>
                  Educate teachers, students, and parents on the benefits of vocational education.
                  </li>
                  <li>
                  Highlight the available work placement options for students.
                  </li>
                </ul>
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

export default Page;
