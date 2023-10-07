import "./App.css";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom"
function App() {

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/Intro-Section-With-Dropdown" element={<Home />}/>          
        </Routes>
      </div>
    </>
  );
}

export default App;
