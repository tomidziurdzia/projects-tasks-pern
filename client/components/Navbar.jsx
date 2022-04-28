import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tasks/new">Nueva Tarea</Link>
      <Link to="/projects/new">Nuevo Proyecto</Link>
    </nav>
  );
};

export default Navbar;
