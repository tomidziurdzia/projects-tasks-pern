import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-500">
      <div className="bg-red-500">
        <Link to="/">Home</Link>
        <Link to="/projects/new">New Project</Link>
        <Link to="/tasks/new">New Task</Link>
      </div>
    </nav>
  );
};

export default Navbar;
