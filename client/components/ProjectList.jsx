import React from "react";
import { Link } from "react-router-dom";
import Project from "./Project";

const ProjectList = () => {
  return (
    <>
      <Link to="/project/:id">
        <Project />
      </Link>
      <Link to="/project/:id">
        <Project />
      </Link>

      <ul>
        <li>
          {/*
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`}
          <Project
            key:{project.id}
            project:{project}
          />
          </ Link>
        ))}
      */}
        </li>
      </ul>
    </>
  );
};

export default ProjectList;
