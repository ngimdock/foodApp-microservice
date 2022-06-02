import express from "express"
import { config } from "dotenv"
import createConnexion from "./utils/index.js"
import User from "./models/users.js"

config()

const { PORT } = process.env
const app = express()

app.use(express.json())



app.get('/', (req, res) => {
  res.send('Hello World my name is dan!')
})


app.post('/users/create', async (req, res) => {

  const {
    name,
    age
  } = req.body

  if(!name || !age) return res.status(400).json({ error: "provide name and age" })

  try{
    const user = new User(req.body)

    await user.save()
    return res.status(201).json({ data: user })
  }catch(err){
    return res.status(404).json({ error: "And error occured" })
  }
})

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}`)

  await createConnexion() // create database connexion
})