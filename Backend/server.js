import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"


const app = express()
app.use(bodyParser.json())
app.use(cors())

const mongoServer = "mongodb://localhost/distances"
mongoose.connect(mongoServer, { useNewUrlParser: true })
mongoose.Promise = Promise






app.listen(8080, () =>
  console.log("Example app listening on port 8080!")
)
