const express = require("express")
const mongoose = require("mongoose")
//const cors = require("cors")

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger-config')

const checkToken = require('./config/auth/checkToken')
const createInitialData = require('./config/db/initialData')

// variaveis de ambiente
//require('dotenv').config()

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)


createInitialData()

app.use(express.json())

//app.use(cors())

// Rotas API
const clienteRoutes = require('./routes/clienteRoutes');
const carroRoutes = require('./routes/carroRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const colaboradorRoutes = require('./routes/colaboradorRoutes');
const loginRoutes = require('./routes/loginRoutes');

const contratoRoutes = require('./routes/contratoRoutes')


app.use('/login', loginRoutes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//rotas que não precisam de autenticação favor inserir acima do app.use(checkToken)
app.use(checkToken)


app.use('/cliente', clienteRoutes);
app.use('/carro', carroRoutes);
app.use('/reserva', reservaRoutes);
app.use('/colaborador', colaboradorRoutes);
app.use('/contrato', contratoRoutes);

//conexão com o banco
mongoose.connect(
    process.env.STRING_CONEXAO
).then(() => {
    console.log("MongoDB conectado!")
    app.listen(3005)
})
    .catch((err) => console.log(err))

app.listen(3000)
