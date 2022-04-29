import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Project from "./Project";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    const response = await fetch("http://localhost:4000/projects");
    const data = await response.json();
    console.log(data);
    setProjects(data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <Link key={project.id} to={`/projects/${project.id}`}>
          <Project project={project}>{project.title}</Project>
        </Link>
      ))}

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
    </div>
  );
};

export default ProjectList;
