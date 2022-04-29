import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-color5 text-white py-3">
      <div className="flex justify-center w-40">
        <Link className="" to="/">
          Home
        </Link>
      </div>
      <div className="flex justify-around w-80">
        <Link to="/projects/new">New Project</Link>
        <Link to="/tasks/new">New Task</Link>
      </div>
    </nav>
  );
};

export default Navbar;
