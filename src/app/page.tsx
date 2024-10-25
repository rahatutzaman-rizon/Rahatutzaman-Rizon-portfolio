
import About from "./about/page";
import Banner from "./banner/Banner";
import ProfilePage from "./Details/Details";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <div>

      <Banner></Banner>
      <About></About>
      <ProfilePage></ProfilePage>
      <ProjectsPage></ProjectsPage>
    </div>
  );
}
