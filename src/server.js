import express from 'express'
import cors from 'cors'

const app = express()

const port = 3005 //process.env.PORT || 

app.use(express.urlencoded({ extended: true} ))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async (req, res) => {
    res.send("This server is working!")
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`)
})