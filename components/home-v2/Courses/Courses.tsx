import { CourseCard, Heading, Paragraph } from '@/components/core';
import React from 'react'

export const Courses = () => {

    const data = {
        title: "Courses",
        description: "Join us on the Skilline journey. Together, we can create a skilled and empowered India. Whether you're a learner seeking new opportunities, an institution aiming to enhance education, or a policymaker striving to improve governance, Skilline is here to support you.",
        course: [
            {
                image: "/course/python.jpg",
                price: "Free",
                language: "Python",
                title: "Learn Python: Beginner to Expert",
                label: "This comprehensive Python course covers fundamentals to advanced concepts, enabling you to develop powerful applications and automate tasks efficiently.",
                level: "Beginner",
                link: {
                    url: "/",
                    target: "_self"
                }
            },
            {
                image: "/course/react.jpg",
                price: "₹2,500",
                language: "React.js",
                title: "Mastering React.js for Frontend Development",
                label: "Dive deep into React.js, the popular JavaScript library, and learn to create dynamic and responsive user interfaces for modern web applications.",
                level: "Expert",
                link: {
                    url: "/",
                    target: "_self"
                }
            },
            {
                image: "/course/html-css.jpg",
                price: "₹1,800",
                language: "HTML, CSS, PHP",
                title: "Web Development with HTML, CSS, and PHP",
                label: "Gain essential web development skills by mastering HTML, CSS, and PHP to build and style robust and interactive websites from scratch.",
                level: "Expert",
                link: {
                    url: "/",
                    target: "_self"
                }
            },
            {
                image: "/course/react-native.jpg",
                price: "₹2,200",
                language: "React Native",
                title: "React Native: Build Mobile Apps with JavaScript",
                label: "Learn to create high-performance mobile applications for iOS and Android using React Native and JavaScript, leveraging a single codebase for both platforms.",
                level: "Expert",
                link: {
                    url: "/",
                    target: "_self"
                }
            }
        ]
    }

    return (
        <div className="py-[70px]">
            <div className="container space-y-10">
                <div className='xl:w-[70%] lg:w-[90%] md:w-full w-full space-y-2'>
                    <Heading>{data.title}</Heading>
                    <Paragraph>{data.description}</Paragraph>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">
                    {data.course.map((item, index) => (
                        <CourseCard
                            key={index}
                            image={item.image}
                            price={item.price}
                            language={item.language}
                            title={item.title}
                            label={item.label}
                            link={item.link}
                            level={item.level}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
