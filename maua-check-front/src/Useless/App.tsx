import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../page/MainPage";
import NavbarMauaCheck from "../Components/NavBar";
import Relatorio from "../page/Relatorio";

function App() {
  return (
    <Router>
      <NavbarMauaCheck/>
      <div style={{ paddingTop: "70px" }}> 
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path= "/Relatorio" element={<Relatorio/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
