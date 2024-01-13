const express = require("express")
const app = express();
const cors = require("cors");
const dotenv = require("dotenv")
const {analyze} = require("./analyze.js")

//using cors
app.use(cors(
    {
        origin: '*',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
      }
))
//configure my env files
dotenv.config()

port = 8080
const key = process.env.API_KEY;
//read the json files coming to you
app.use(express.json())

app.get("/", async (req, res) => {
   res.send("server page")
})

app.post("/",  async (req, res) => {
    const url = req.body.input;
    const Analyze = await analyze(url, key)
    console.log(Analyze);
    res.json(Analyze)
})

app.listen(8080, () => console.log(`server is listening on port ${port}`) )