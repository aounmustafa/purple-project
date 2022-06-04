import "./App.css";
import Container from "./components/Container";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UI from "./components/UI";
import CaseStudy from "./components/CaseStudy";
import CaseDetail from "./components/CaseDetail";
import FirstPage from "./components/FirstPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/" element={<Container />}>
          <Route path="about" element={<About />} />
          <Route path="uiux" element={<UI />} />
          <Route path="casestudy" element={<CaseStudy />} />
          <Route path="casestudy:id" element={<CaseDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
