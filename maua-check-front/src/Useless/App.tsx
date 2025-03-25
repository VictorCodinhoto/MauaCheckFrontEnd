import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../page/MainPage";
import NavbarMauaCheck from "../Components/NavBar";

function App() {
  return (
    <Router>
      <NavbarMauaCheck/>
      <div style={{ paddingTop: "70px" }}> 
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
