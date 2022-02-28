import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes'
import { config } from 'dotenv'

config()
const app = express()
app
  .use(cors())
  .use(express.json())
  .use('/users', userRoutes)

const port = process.env.PORT;

app.listen(port, () => console.log(`listening to port ${port}`))
