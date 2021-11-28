import env from 'dotenv';
env.config();
const mysqlConnectionConfig = {
  client: 'mysql',
  connection: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB,
    password: ''
  }
};

export default mysqlConnectionConfig;
