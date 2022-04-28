import React from "react";

const Task = ({ task }) => {
  const { name, done } = task;
  return (
    <div>
      <p>{name}</p>
      <p>{done}</p>
    </div>
  );
};

export default Task;
