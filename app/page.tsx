import {
  HeroSlider,
  Stories,
  GuidingPrinciple,
  JoinUs,
  OurRoadmap,
  Ventures,
  Blog,
  HomeContactUs,
  AccordionPageTemplate,
  Testimonial,
  Course,
  Regionallanguages,
  RoadMap,
  OurImpacts,
} from "@/components/home";
import { HomePartnershipsLogos } from "@/components/home/HomePartnershipsLogos";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <div className="pb-8 pt-4">
      <Regionallanguages />
      </div>
      <div className="">
      <OurImpacts />
      </div>

      <div className="md:pt-8 pt-3">
      <Course />
      </div>
      <div className="pt-[15px]">
      <GuidingPrinciple />
      </div>
     
      <div className="pt-[30px]">
      <Ventures />
      </div>
      <div className="pt-10">
      <Stories />
      </div>
      
      <HomePartnershipsLogos />
      <Testimonial />
      <div className="md:pt-0 pt-10">
      <Blog />
      </div>
      <div className="xl:hidden lg:hidden md:hidden block">
      <OurRoadmap />
      </div>
      <div className="xl:block lg:block md:block hidden">
    <RoadMap />
    </div>
      <HomeContactUs />
      <JoinUs />
      
      <AccordionPageTemplate />
    </main>
  );
}
