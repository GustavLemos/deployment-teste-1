/*import React from 'react';
import { Outlet } from "react-router-dom";

import './components/style/content.css'

import SideBar from './components/sideBar';

import './app.css'

function App() {
  return (
    <main className='app'>
      <SideBar />
      <div className='content'>
        <Outlet />
      </div>
    </main>
  );
}

export default App;
*/


// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './components/style/content.css';
import './app.css';
import SideBar from './components/sideBar';
import Login from './pages/login.jsx';
import Cadastro from './pages/cadastro.jsx';
import Carro from './pages/carro.jsx';
import CadastroCarro from './pages/cadastroCarro.jsx';
import Cliente from './pages/cliente.jsx';
import Reserva from './pages/reserva.jsx';
import CadastroCliente from './pages/cadastroCliente.jsx';
import CadastroReserva from './pages/cadastroReserva.jsx';
import Contrato from './pages/contrato.jsx';
import CriarContrato from './pages/criarContrato.jsx';
import ReservaStep1 from './components/reservaStep1.jsx';
import ReservaStep2 from './components/reservaStep2.jsx';
import ReservaStep3 from './components/reservaStep3.jsx';

function App() {
    return (
        <main className='app'>
            <SideBar />
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="cadastro" element={<Cadastro />} />
                    <Route path="carro" element={<Carro />} />
                    <Route path="cadastrocarro" element={<CadastroCarro />} />
                    <Route path="cliente" element={<Cliente />} />
                    <Route path="reserva" element={<Reserva />} />
                    <Route path="cadastroreserva" element={<CadastroReserva />}>
                        <Route path="" element={<Navigate to="reserva-passo-1" />} />
                        <Route path="reserva-passo-1" element={<ReservaStep1 />} />
                        <Route path="reserva-passo-2" element={<ReservaStep2 />} />
                        <Route path="reserva-passo-3" element={<ReservaStep3 />} />
                    </Route>
                    <Route path="contrato" element={<Contrato />} />
                    <Route path="criarcontrato" element={<CriarContrato />} />
                </Routes>
            </div>
        </main>
    );
}

export default App;
