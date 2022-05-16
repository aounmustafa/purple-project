import "./App.css";
import Container from "./components/Container";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
