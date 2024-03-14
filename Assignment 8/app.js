const express = require("express");
const cors = require('cors');
const { collection } = require("./db");
const app = express();
app.use(cors())
app.use(express.json())


app.post("/", async (req, res) => {
    const { name, email, city } = req.body;
    try {
        const user = await collection.insertOne({
            email,
            name,
            city,
        });
        res.status(201).json({
            status: "success",
            user,
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
        })
    }
});

app.listen(3000, () => {
    console.log("Server Listening to port 3000");
});