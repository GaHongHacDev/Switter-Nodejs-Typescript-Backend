import { Request, Response } from 'express'
import User from '~/models/schema/User.schemas'
import databaseService from '~/services/database.services'
import userService from '~/services/user.services'
import { NextFunction, ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/requests/User.requests'

export const loginController = async (req: Request<ParamsDictionary, any, any>, res: Response) => {
  const { email, password } = req.body
  if (email === 'tienxuantrap@gmail.com' && password === '123456') {
    res.json({
      message: 'Login success'
    })
    return
  }

  return void res.status(400).json({
    error: 'Login Failed'
  })
}

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) => {
  const result = await userService.register(req.body)
  res.json({
    message: 'Register success',
    result
  })
  return
}
