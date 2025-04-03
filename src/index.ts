import express, { Request, Response, NextFunction } from 'express'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
// import { error } from 'node:console'

const app = express()
const port = 3000

app.use(express.json())
app.use('/users', usersRouter)
databaseService.connect()

//Default error handler => Error handler mặc định, nếu không có error handler nào khác thì sẽ sử dụng cái này
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    error: err.message
  })
  return
})

app.listen(port, () => {
  console.log(`Your app listening on port ${port}`)
})
