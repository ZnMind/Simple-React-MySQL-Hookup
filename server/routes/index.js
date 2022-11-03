import * as express from 'express';
import messageRouter from './message.js';
const router = express.Router();

// localhost:5000/api/message/
router.use("/message", messageRouter);

export default router;