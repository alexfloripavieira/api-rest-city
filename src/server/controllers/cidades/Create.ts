import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'

interface Icidade {
  nome: string
  estado: string
}

const bodyValidation: yup.SchemaOf<Icidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3)
})

export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {
  let validateDate: Icidade | undefined = undefined
  try {
    validateDate =  await bodyValidation.validate(req.body)
  } catch (error) {
    const yupError = error as yup.ValidationError
    return res.json({
      erros: {
        default: yupError.message
      }
    })
  }

  const data: Icidade = req.body

  console.log(data)

  return res.send('Create')
}