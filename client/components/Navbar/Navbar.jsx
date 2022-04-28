import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={s.nav__container}>
        <Link className={s.nav__link} to="/">
          Home
        </Link>
        <Link className={s.nav__link} to="/projects/new">
          New Project
        </Link>
        <Link className={s.nav__link} to="/tasks/new">
          New Task
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
