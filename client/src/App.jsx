import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProjectList from "./components/ProjectList.jsx";
import ProjectForm from "./components/ProjectForm.jsx";
import TaskForm from "./components/TaskForm.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProjectList />}></Route>
        <Route path="/projects/new" element={<ProjectForm />}></Route>
        <Route path="/tasks/new" element={<TaskForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
