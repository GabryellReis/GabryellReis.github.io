import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Person from "./pages/Person";
import Projects from "./pages/Projects";
import "./styles.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/person" element={<Person />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
