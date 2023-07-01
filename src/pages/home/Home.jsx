import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedby/TrustedBy";
import Slide from "../../components/slide/Slide";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { cards, projects } from "../../data";
import Video from "../../components/video/Video";
import NewBusiness from "../../components/newBusiness/NewBusiness";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((cards) => (
          <CategoryCard item={cards} key={cards.id} />
        ))}
      </Slide>
      <Video />
      <NewBusiness />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
