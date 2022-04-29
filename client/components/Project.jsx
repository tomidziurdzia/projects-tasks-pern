import TasksList from "./TasksList";

const Project = ({ project }) => {
  const { title, description } = project;

  return (
    <div>
      <h2 className="text-6xl">{title}</h2>
      <h3>{description}</h3>
      <TasksList project={project} />
    </div>
  );
};

export default Project;
