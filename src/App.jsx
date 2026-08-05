import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./features/Layout/Layout";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import About from "./pages/About/About";
import WorkWithUs from "./pages/WorkWithUs/WorkWithUs";
import PrivacyPolicy from "./pages/Privacy/Privacy";
import { WORK_WITH_US_ENABLED, PROJECT_DETAIL_PAGES_ENABLED } from "./config/features";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/:id"
            element={
              PROJECT_DETAIL_PAGES_ENABLED ? (
                <ProjectDetails />
              ) : (
                <Navigate to="/projects" replace />
              )
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/work-with-us"
            element={WORK_WITH_US_ENABLED ? <WorkWithUs /> : <Navigate to="/" replace />}
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
