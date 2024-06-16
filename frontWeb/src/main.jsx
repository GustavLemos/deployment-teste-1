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
import App from './App'; // Ajuste o caminho conforme a estrutura de pastas
import Login from "./pages/Login";
import Cadastro from './pages/Cadastro';
import Carro from './pages/Carro';
import CadastroCarro from './pages/CadastroCarro';
import Cliente from './pages/Cliente';
import Reserva from './pages/Reserva';
import CadastroCliente from './pages/CadastroCliente';
import CadastroReserva from './pages/CadastroReserva';
import Contrato from './pages/Contrato';
import CriarContrato from './pages/CriarContrato';
import ReservaStep1 from './components/ReservaStep1';
import ReservaStep2 from './components/ReservaStep2';
import ReservaStep3 from './components/ReservaStep3';
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

