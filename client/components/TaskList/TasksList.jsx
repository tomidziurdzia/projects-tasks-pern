import React, { useState, useEffect } from "react";
import Task from "../Task/Task";

const TasksList = ({ project }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await fetch(
      `http://localhost:4000/projects/${project.id}/tasks`
    );
    const data = await response.json();
    setTasks(data);
    console.log(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h3>TasksList</h3>
      {tasks.map((task) => (
        <Task key={task.id} task={task}>
          {task.name}
        </Task>
      ))}
    </>
  );
};

export default TasksList;
