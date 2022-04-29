import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import FormProject from "../components/FormProject";

const App = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main className="bg-color3 mt-3 h-4/6">
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/projects/new" element={<FormProject />}></Route>
        </Routes>
      </main>
      <footer></footer>
    </Router>
  );
};

export default App;
