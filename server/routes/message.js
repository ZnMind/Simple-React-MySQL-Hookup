import * as express from 'express';
import db from '../db/index.js';
const router = express.Router();

router.get("/:username?", async (req, res) => {
    try {
        let username = req.params.username;
        if (username) {
            let messages = await db.message.one(username);
            res.json(messages);
        } else {
            let messages = await db.message.all();
            res.json(messages);
        }
    } catch (error) {
        console.log(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const body = req.body;
        const dbRes = await db.message.insert(body.name, body.message);
        res.status(200).json(dbRes);
    } catch (error) {
        console.log(error)
    }
});

export default router;