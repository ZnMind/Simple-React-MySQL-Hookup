import express from 'express';
import cors from 'cors';
import apiRouter from './routes/index.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", apiRouter);

app.get('/', (req, res) => {
    res.send({ "Status": "Server is working!"})
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
});