import React from "react";
import Task from "./Task";

const TasksList = () => {
  return (
    <>
      <h3>TasksList</h3>
      <Task />
      <Task />
      {/*
        {taks.map((task) => (
          <Task
            key:{task.id}
            task:{task}
          />
        ))}
      */}
    </>
  );
};

export default TasksList;
