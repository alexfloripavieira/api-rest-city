import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

import { CidadeController } from '../controllers'

const router = Router()

router.post('/', (_, res) => {
  return res.json(`process: {
    aa: Blob,
    cc: decodeURI
  }`)
})

router.post('/cidades', CidadeController.create)

export { router }
