const router = require('express').Router()
const Colab = require('../models/Colaborador')

const ColaboradorService = require('../services/colaboradorService')

const colaboradorService = new ColaboradorService();

router.post('/', async (req, res) => {

    try {
        const colab = await colaboradorService.postColaborador(req)
        return res.status(colab.status).json(colab)
    } catch (error) {
        return {
      return res.status(error.status).json({ message: error.message });
        }
    }
})
/*
const router = require('express').Router()

const LoginService = require('../services/loginService')

const loginService = new LoginService()

router.post("/", async (req, res) => {
    try {
        const colaborador = await loginService.findByCpf(req)
        return res.status(colaborador.status).json(colaborador);
    } catch (error) {
      console.error(error);
      return res.status(error.status).json({ message: error.message });
    }
  });
module.exports = router
*/
router.get('/', async (_, res) => {

    try {
        const colaboradores = await colaboradorService.GetColaboradorAll();
        return res.status(colaboradores.status).json(colaboradores.colaboradores)
    } catch (error) {
        return {
            status: error.status,
            message: error.message
        }
    }
})

router.get('/:id', async (req, res) => {

    try {
        const colaborador = await colaboradorService.GetColaboradorId(req.params.id)
        return res.status(colaborador.status).json(colaborador.user)
    } catch (error) {
        return {
            status: error.status,
            message: error.message
        }
    }
})

router.put('/:id', async (req, res) => {

    try {
        const colaboradorAtualizado = await colaboradorService.PutColaborador(req, req.params.id)
        return res.status(colaboradorAtualizado.status).json({ message: colaboradorAtualizado.message, colaborador: colaboradorAtualizado.user })
    } catch (error) {
        return {
            status: error.status,
            message: error.message
        }
    }
})

router.delete('/:id', async (req, res) => {

    try {
        const colaboradorDeletado = await colaboradorService.deleteColaborador(req.params.id)
        return res.status(colaboradorDeletado.status).json({ message: colaboradorDeletado.message, colaborador: colaboradorDeletado.user })
    } catch (error) {
        return {
            status: error.status,
            message: error.message
        }
    }
})

module.exports = router
