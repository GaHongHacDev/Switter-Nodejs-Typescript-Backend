import express from 'express'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'

const app = express()
const port = 3000

app.use(express.json())
app.use('/users', usersRouter)
databaseService.connect()

app.listen(port, () => {
  console.log(`Your app listening on port ${port}`)
})
