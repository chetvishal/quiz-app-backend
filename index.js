const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const { dbConnect } = require('./db/db');
const quiz = require('./routes/express.quiz')

app.use(express.json());
app.use(cors());
dbConnect();

app.get('/', (req, res) => {
    res.json({ success: true, message: "Quiz api" });
});

app.use('/quiz', quiz);

app.use((req, res) => {
    res.status(404).json({ success: false, message: "No such route defined" })
})

app.use(((err, req, res, next) => {
    res.status(500).json({ success: false, message: err })
}))

app.listen(PORT, () => {
    console.log('SERVER STARTED');
});