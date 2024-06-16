/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from "./pages/login.jsx";
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

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "app",
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to="reserva" />
      },
      {
        path: "reserva",
        element: <Reserva />,
      },
      {
        path: "cadastroreserva",
        element: <CadastroReserva />,
        children: [
          {
            path: '',
            element: <Navigate to="reserva-passo-1" />
          },
          {
            path: 'reserva-passo-1',
            element: <ReservaStep1 />
          },
          {
            path: 'reserva-passo-2',
            element: <ReservaStep2 />
          },
          {
            path: 'reserva-passo-3',
            element: <ReservaStep3 />
          }
        ]
      },
      {
        path: "contrato",
        element: <Contrato />,
      },
      {
        path: "carro",
        element: <Carro />,
      },
      {
        path: "cliente",
        element: <Cliente />,
      },
      {
        path: "cadastro",
        element: <Cadastro />,
      },
      {
        path: "cadastrocarro",
        element: <CadastroCarro />
      },
      {
        path: "cadastrocliente",
        element: <CadastroCliente />
      },
      {
        path: "criarcontrato",
        element: <CriarContrato />
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<App />}>
          <Route path="" element={<Navigate to="reserva" />} />
          <Route path="reserva" element={<Reserva />} />
          <Route path="cadastroreserva" element={<CadastroReserva />}>
            <Route path="" element={<Navigate to="reserva-passo-1" />} />
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
    </Router>
  </React.StrictMode>
);
