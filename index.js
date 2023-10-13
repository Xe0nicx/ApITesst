const express = require('express');
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("API Test home")
})

app.post("/api/post" ,(req, res) => {
    const name = req.body.name;
    if (!name || req.headers['content-type'] !== 'application/json') {
        res.json({error: "Can't find the name or not json."})
    } else {
        res.json({message: `your name is ${name}`})
    }
})

app.get("/api/get", (req,res) => {
    const name = req.query.name;
    if (!name) {
        res.json({error: "Can't find the name."})
    } else {
        res.json({message: `your name is ${name}`})
    }
})

app.listen(3000, () => {
    console.log('API Is running...')
})