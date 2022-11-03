import * as mysql from "mysql";
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD
});

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
}

import message from "./message.js";

export default {
    message
}