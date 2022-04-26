import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const newProject = await Project.create({
      title,
      description,
    });
    res.json(newProject);
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: { id },
    });
    project.set(req.body);
    await project.save();
    return res.json(project);
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Project.destroy({
      where: {
        id,
      },
    });
    res.status(204).send("Eliminado Correctamente");
  } catch (error) {
    next(error);
  }
};

export const getProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: { id },
    });
    if (!project)
      return res.status(404).json({ message: "Proyecto no encontrado" });
    res.json(project);
  } catch (error) {
    next(error);
  }
};

export const getProjectTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findAll({
      where: {
        projectId: id,
      },
    });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};
