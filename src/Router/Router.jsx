import { createBrowserRouter } from "react-router";
import RootPage from "../Pages/RootPage";
import Banner from "../Pages/Banner";
import BlogList from "../Pages/BlogList";
import BlogDetails from "../Pages/BlogDetails";
import OutletMain from "../Pages/OutletMain";
import ProjectsTitle from "../Pages/ProjectTitile";
import Skills from "../Pages/Skills";
import AboutMe from "../Pages/AboutMe";
import Contact from "../Pages/Contact";
import ProjectDetils from "../Pages/ProjectDetils";

export const router = createBrowserRouter([
  {
    index: '/',
    Component: OutletMain,
    errorElement: <p>this is error pages</p>,
    children: [
      {
        index: true,
        Component: RootPage,
      },
      
      {
        path: 'blog/:id',
        Component: BlogDetails,
      },
      {
        path:'/contact',
       Component: Contact
      },
      
      {
        path:'/skills',
        Component: Skills
      },
      {
        path:'/about',
        Component: AboutMe
      },
     {
        path: "projects/:id",
        Component: ProjectDetils
      },
      {
        path: "projects",
        Component: ProjectsTitle
      }
    

    ],
  },
]);
