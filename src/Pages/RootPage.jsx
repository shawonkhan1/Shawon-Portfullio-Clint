import React from "react";
import { Outlet } from "react-router";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import ProjectsTitle from "./ProjectTitile";
import Skills from "./Skills";
import Education from "./Education";
import BlogList from "./BlogList";
import Contact from "./Contact";

const RootPage = () => {
  return (
    <div className="mt-20">
      {/* Home page */}

      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <ProjectsTitle></ProjectsTitle>
      <BlogList></BlogList>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default RootPage;
