import "./App.css";
import Container from "./components/Container";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UI from "./components/UI";
import Railway from "./components/Railway";
import Illustraion from "./components/Illustraion";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="" element={<About />} />
          <Route path="uiux" element={<UI />} />
          <Route path="railway" element={<Railway />} />
          <Route path="illustration" element={<Illustraion />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
