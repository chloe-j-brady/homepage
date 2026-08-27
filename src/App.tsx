import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Travel from "./pages/Travel";
import DataVisualization from "./pages/DataVisualization";
import A0 from "./pages/data-visualization/A0";
import "./App.scss";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/data-visualization" element={<DataVisualization />} />
            <Route path="/data-visualization/a0" element={<A0 />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;