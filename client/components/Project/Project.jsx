import TasksList from "../TaskList/TasksList";
import s from "./Project.module.css";

const Project = ({ project }) => {
  const { title, description } = project;

  return (
    <div className={s.project__container}>
      <h2 className={s.project__title}>{title}</h2>
      <h3>{description}</h3>
      <TasksList project={project} />
    </div>
  );
};

export default Project;
