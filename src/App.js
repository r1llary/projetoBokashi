import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Objetivos from './pages/Objetivos';
import Beneficios from './pages/Beneficios';
import Aplicacoes from './pages/Aplicacoes';
import Mododepreparo from './pages/Mododepreparo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/objetivos" element={<Objetivos />} />
        <Route path="/beneficios" element={<Beneficios />} />
        <Route path="/aplicacoes" element={<Aplicacoes />} />
        <Route path="/mododepreparo" element={<Mododepreparo />} />
      </Routes>
    </Router>
  );
}
export default App;
