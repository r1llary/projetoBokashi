import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts/index.jsx';
import Objetivos from './pages/Objetivos';
import Beneficios from './pages/Beneficios';
import Mododepreparo from './pages/Mododepreparo';
import Aplicacoes from './pages/Aplicacoes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/objetivos" element={<Objetivos />} />
        <Route path="/beneficios" element={<Beneficios />} />
        <Route path="/mododepreparo" element={<Mododepreparo />} />
        <Route path="/aplicacoes" element={<Aplicacoes />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}
export default App;
