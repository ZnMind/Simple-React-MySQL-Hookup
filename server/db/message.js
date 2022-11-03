import { Query } from './index.js';

const all = () => Query('SELECT * FROM messages');

const one = (username) => Query('Select * from messages where username = ?', [username]);

const insert = (username, message) => Query('insert into messages (username, message) values (?, ?)', [username, message]);

export default {
    all,
    one,
    insert
}