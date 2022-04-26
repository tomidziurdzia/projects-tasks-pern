import { Task } from "../models/Task.js";

export const getTasks = (req, res) => {
  res.send("Obteniendo Tareas");
};

export const createTask = (req, res) => {
  res.send("Creando Tarea");
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
