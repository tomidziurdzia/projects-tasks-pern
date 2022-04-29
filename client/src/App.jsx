import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import FormTask from "../components/FormTask";
import FormProject from "../components/FormProject";
import Project from "../components/Project";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProjectList />}></Route>
          <Route path="/tasks/new" element={<FormTask />}></Route>
          <Route path="/projects/new" element={<FormProject />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
