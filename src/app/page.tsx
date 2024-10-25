"use client"
import About from "./about/page";
import Banner from "./banner/Banner";
import ContactForm from "./contact/page";
import ProfilePage from "./Details/Details";
import Problem from "./Problem/page";
import ProjectsPage from "./projects/page";
import SkillsShowcase from "./skill/Skill";

export default function Home() {
  return (
    <div>

      <Banner></Banner>
      <About></About>
      <ProfilePage></ProfilePage>
      <ProjectsPage></ProjectsPage>
      <SkillsShowcase></SkillsShowcase>
      <Problem></Problem>
      <ContactForm></ContactForm>
    </div>
  );
}
