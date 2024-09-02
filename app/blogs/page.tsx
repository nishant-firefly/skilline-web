import { Breadcrumb, CardBox, Heading } from "@/components/core";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

type ItemType = {
  title: string;
  description: string;
  image: string;
  author: string;
  link: { url: string; target: "_blank" | "_self" };
  content?: string;
};

const Blog = () => {

  const blogData = [
    {
      title: "The Impact of English-Medium School Obsession on Indian Education",
      description:
        "In the recent most provocative statement that came from the Chief of the National Council for Educational Research and Training (NCERT), Dr. Hrushikesh Senapaty heavily rubbish Indian parents' and society's craze for English-medium schools as suicidal, especially for children, in their learning and culture.",
      image:
        "/blogs/the-impact-of-english-medium-school-obsession-on-indian-education.jpg",
      author: "Skilline Researcher",
      link: {
        url: "/blogs/the-impact-of-english-medium-school-obsession-on-indian-education",
        target: "_self",
      },
    },
    {
      title: "ASER 2023 Report: Youth Education and Skills in Rural India",
      description:
        "Beyond Basics, the ASER 2023 report, reflects a comprehensive analysis of the education and skill scenario of rural youth aged 14 to 18 years. This background of this age group is revisited after six years, offering hence valuable insights into their status of education, digital literacy competencies, and preparedness for challenges.",
      image:
        "/blogs/aser-2023-report-insights-into-rural-youth-education-and-skills.jpg",
      author: "Skilline Researcher",
      link: {
        url: "/blogs/aser-2023-report-insights-into-rural-youth-education-and-skills",
        target: "_self",
      },
    },
    {
      title: "Navigating India's Skills Landscape: Closure of the Skill Gap",
      description:
        "In a dynamic labor market such as today's, skill is prima facie for survival. It is acknowledged that the Republic of India is now facing an ever-widening skill gap usually critical to poised economic growth and individual career planning. Bridging the gap is indispensable for India to harness this demographic dividend and carve out its position on the global map.",
      image:
        "/blogs/navigating-indias-skills-landscape-how-to-close-the-skill-gap.jpg",
      author: "Skilline Researcher",
      link: {
        url: "/blogs/navigating-indias-skills-landscape-how-to-close-the-skill-gap",
        target: "_self",
      },
    },
    {
      title: "The Role of EdTech in Bridging the Education Gap in Rural India",
      description:
        "Educational inequalities are persistent in rural India, leading to a big challenge for pupils, educationists, and stakeholders working in far-flung areas. Scantier resources, poor infrastructures, and a mixed socioeconomic environment make a big void in education, hence depriving the rural learners of their academic pursuits. Realization of this fact has initiated a phase of remediation, where integration of EdTech has begun to show unprecedented promise as a tool to bridge this edifice between urban and rural by providing quality education to the hitherto neglected sections of the population. The paper below studies the role of EdTech in transforming rural education; it deals with important issues and insights on effective strategies to narrow the educational gap predicating rural India.",
      image: "/blogs/9a8ab0f7-a705-4d0a-be9b-eefd171a729d.png",
      author: "Skilline Tech",
      link: {
        url: "/blogs/the-role-of-edtech-in-bridging-the-education-gap-in-rural-india",
        target: "_self",
      },
    },
    {
      title:
        "Empowering Rural Youth through Vocational Training: Success Stories and Strategies",
      description:
        "Vocational training is a critical component in empowering rural youth, offering them practical skills and pathways to employment that traditional education often overlooks.",
      image: "/blogs/Empowering-Rural-Youth.jpg",
      author: "Skilline Tech",
      link: {
        url: "/blogs/empowering-rural-youth-through-vocational-training-success-stories-and-strategies",
        target: "_self",
      },
    },
    {
      title:
        "Mother Tongue Education in the Attainment of Academic Success",
      description:
        "In multilingual societies like India, mother-tongue education is crucial for preserving linguistic diversity and enhancing cognitive and cultural development.",
      image: "/blogs/The-Importance-of-Mother-Tongue.jpg",
      author: "Skilline Tech",
      link: {
        url: "/blogs/mother-tongue-education-in-the-attainment-of-academic-success",
        target: "_self",
      },
    },
    {
      title:
        "Empowering Rural Youth through Vocational Training: Success Stories and Strategies",
      description:
        "Vocational training is a critical component in empowering rural youth, offering them practical skills and pathways to employment that traditional education often overlooks.",
      image: "/blogs/Empowering-Rural-Youth.jpg",
      author: "Skilline Tech",
      link: {
        url: "/blogs/empowering-rural-youth-through-vocational-training-success-stories-and-strategies",
        target: "_self",
      },
    },
    {
      title:
        "Mother Tongue Education in the Attainment of Academic Success",
      description:
        "In multilingual societies like India, mother-tongue education is crucial for preserving linguistic diversity and enhancing cognitive and cultural development.",
      image: "/blogs/The-Importance-of-Mother-Tongue.jpg",
      author: "Skilline Tech",
      link: {
        url: "/blogs/mother-tongue-education-in-the-attainment-of-academic-success",
        target: "_self",
      },
    },

  ]

  const data: ItemType[] = blogData as any;
  const limitedData = data.slice(0, 6);



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
            label: "Blog",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Blog
      </Breadcrumb>
      <div className="py-[70px]">
        <div className="container space-y-10">
          <Heading >News & Article</Heading>
          <div className="sm:grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-start xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-4">
            {limitedData.map((item: ItemType, index: number) => {
              const { link, description, image, title } = item;
              return (
                <CardBox
                  key={index}
                  title={title}
                  description={description}
                  image={image}
                  author={item.author}
                  link={link}
                />
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
