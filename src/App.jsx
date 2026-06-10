import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./features/Layout/Layout";
import ScrollToTop from "./features/Layout/ScrollToTop/ScrollToTop";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import About from "./pages/About/About";
import WorkWithUs from "./pages/WorkWithUs/WorkWithUs";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
