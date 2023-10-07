import "./App.css";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import {Routes, Route} from "react-router-dom"
function App() {

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/careers" element={<Careers />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
