const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors()) //to enable cors

const port = 3000;

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})

app.get("/api/message", (req, res)=> {
    res.json({message: "Hello from the server"})
})