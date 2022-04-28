import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "../components/Navbar/Navbar";
import ProjectList from "../components/ProjectList/ProjectList";
import FormTask from "../components/FormTask/FormTask";
import FormProject from "../components/FormProject/FormProject";
import Project from "../components/Project/Project";

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
