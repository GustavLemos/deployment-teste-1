import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Carro from './pages/carro';
import CadastroCarro from './pages/cadastroCarro';
import Cliente from './pages/cliente';
import Reserva from './pages/reserva';
import CadastroCliente from './pages/cadastroCliente';
import CadastroReserva from './pages/cadastroReserva';
import Contrato from './pages/contrato';
import CriarContrato from './pages/criarContrato';
import ReservaStep1 from './components/reservaStep1';
import ReservaStep2 from './components/reservaStep2';
import ReservaStep3 from './components/reservaStep3';

const router = (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/app/*" element={<App />}>
      <Route path="/" element={<Navigate to="reserva" />} />
      <Route path="reserva" element={<Reserva />} />
      <Route path="cadastroreserva" element={<CadastroReserva />}>
        <Route path="/" element={<Navigate to="reserva-passo-1" />} />
        <Route path="reserva-passo-1" element={<ReservaStep1 />} />
        <Route path="reserva-passo-2" element={<ReservaStep2 />} />
        <Route path="reserva-passo-3" element={<ReservaStep3 />} />
      </Route>
      <Route path="contrato" element={<Contrato />} />
      <Route path="carro" element={<Carro />} />
      <Route path="cliente" element={<Cliente />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="cadastrocarro" element={<CadastroCarro />} />
      <Route path="cadastrocliente" element={<CadastroCliente />} />
      <Route path="criarcontrato" element={<CriarContrato />} />
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>{router}</Router>
  </React.StrictMode>
);
