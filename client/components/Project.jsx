import React from "react";

const Project = ({ project }) => {
  const { title, description } = project;
  return (
    <div className="bg-color1 w-96 p-3 text-white rounded-md shadow-md">
      <p className="text-center text-2xl mb-3">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Project;
