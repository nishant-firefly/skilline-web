import {
  HeroSlider,
  OurImpact,
  OurVision,
  About,
  OurApproach,
  Stories,
  Policies,
  GuidingPrinciple,
  JoinUs,
  OurRoadmap,
  Blog,
  Courses,
  Contact,
  Pillars,
} from "@/components/home-v2";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <About />
      <OurVision />
      <OurApproach />
      <OurImpact />
      <Policies />
      <GuidingPrinciple />
      <Pillars />
      <Stories />
      <OurRoadmap />
      <Courses />
      <Blog />
      <Contact />
      <JoinUs />
    </main>
  );
}
