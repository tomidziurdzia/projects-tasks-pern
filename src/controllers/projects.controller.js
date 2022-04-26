import { Project } from "../models/Project.js";

export const getProjects = (req, res) => {
  res.send("Obteniendo Proyectos");
};

export const createProject = (req, res) => {
  res.send("Creando Proyecto");
};

export const updateProject = (req, res) => {
  res.send("Editando Proyecto");
};

export const deleteProject = (req, res) => {
  res.send("Eliminando Proyecto");
};

export const getProject = (req, res) => {
  res.send("Obteniendo Proyecto");
};

export const getProjectTasks = (req, res) => {
  res.send("Obteniendo tareas de un proyecto");
};
