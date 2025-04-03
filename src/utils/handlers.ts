import { NextFunction, Request, Response, RequestHandler } from 'express'

//Hàm này dùng cho bọc các RequestHandler khác, (try catch)
export const wrapRequestHandler = (func: RequestHandler) => {
  // return (req: any, res: any, next: any) => {
  //   func(req, res, next).catch(next)
  // }
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
