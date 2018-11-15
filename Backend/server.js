import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"


const app = express()
app.use(bodyParser.json())
app.use(cors())

const mongoServer = "mongodb://localhost/actions"
mongoose.connect(mongoServer, { useNewUrlParser: true })
mongoose.Promise = Promise

mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

const Action = mongoose.model("Action", {
  id: Number,
  type: String,
  title: String,
  description: String,
  co2value: 0,
  timePeriod: 0
})

app.get("/", (req, res) => {
  res.send("Actions API")
})

app.get("/actions/", (req, res) => {
  Action.find().then(actions => {
    console.log("Actions: ", solutions)
    res.json(actions)
  })
})

app.post("/actions", (req, res) => {
  const action = new Action(req.body)
  action.save()
    .then(() => { res.status(201).send("Action added") })
    .catch(err => { res.status(400).send(err) })
})

app.listen(8080, () =>
  console.log("Actions API listening on port 8080!")
)
