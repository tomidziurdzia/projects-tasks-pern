import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;

  try {
    const newTask = await Task.create({
      name,
      done,
      projectId,
    });

    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = (req, res) => {
  res.send("Editando Tareas");
};

export const deleteTask = (req, res) => {
  res.send("Eliminando Tarea");
};

export const getTask = (req, res) => {
  res.send("Obteniendo Tarea");
};
