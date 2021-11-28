import mysqlConnectionConfig from './mysql.js';
import knex from 'knex';
const db = knex(mysqlConnectionConfig);
export default db;
