import { CourseCard, Heading, Paragraph } from "@/components/core";
import React from "react";

export const Courses = () => {
  const data = {
    title: "Courses",
    description:
      "Be a Part of the Skilline Story. We can together build a skilled and empowered India. Skilline is committed to providing support for learners seeking new opportunities, institutions trying to improve the quality of education, and policymakers attempting to make governance more effective.",
    course: [
      {
        image: "/course/pu-02.jpg",
        price: "Free",
        language: "Python",
        title: "Python for AI & Machine learning",
        label:
          "This comprehensive Python course covers fundamentals to advanced concepts, enabling you to develop powerful applications and automate tasks efficiently.",
        level: "Very High",
        link: {
          url: "/",
          target: "_self",
        },
      },
      {
        image: "/course/py-04.png",
        price: "₹2,500",
        language: "Python",
        title: "Mastering Machine learning Library",
        label:
          "Mastering Machine learning Library(e.g. TensorFlow, PyTorch scikit-learn)",
        level: "High",
        link: {
          url: "/",
          target: "_self",
        },
      },
      {
        image: "/course/py-03.jpg",
        price: "₹1,800",
        language: "Python",
        title: "Deep Learning Fundamentals with TensorFlow/PyTorch",
        label: "Deep Learning Fundamentals (e.g. TensorFlow, PyTorch, Keras)",
        level: "High",
        link: {
          url: "/",
          target: "_self",
        },
      },
      {
        image: "/course/py-ai-1.jpg",
        price: "₹2,200",
        language: "Python",
        title: "Data structures & Algorithms for ai",
        label: "Data structures & Algorithms",
        level: "Expert",
        link: {
          url: "/",
          target: "_self",
        },
      },
      // {
      //   image: "/course/py-04.png",
      //   price: "₹2,200",
      //   language: "Python",
      //   title: "Mathematics & Statistics for Machine Learning",
      //   label:
      //     "Mathematics & Statistics (Calculus, Linear Algebra, Probability & Statistics)",
      //   level: "Expert",
      //   link: {
      //     url: "/",
      //     target: "_self",
      //   },
      // },
    ],
  };

  return (
    <div className="py-[50px]">
      <div className="container space-y-10">
        <div className="w-full text-center space-y-2">
          <Heading>{data.title}</Heading>
          <Paragraph>{data.description}</Paragraph>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">
          {data.course.map((item, index) => (
            <CourseCard
              key={index}
              image={item.image}
              // price={item.price}
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
  );
};
