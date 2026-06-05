import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./features/Layout/Layout";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import About from "./pages/About/About";
import WorkWithUs from "./pages/WorkWithUs/WorkWithUs";
import PrivacyPolicy from "./pages/Privacy/Privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
