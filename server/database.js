import db from 'pg';
import env from 'dot-env';
import postgres from 'postgres';

env.config();

const client = new db.Client({
    // user: process.env.PG_USER,
    // host: process.env.PG_HOST,
    // database: process.env.PG_DATABASE,
    // password: process.env.PG_PASSWORD,
    // port: process.env.PG_PORT,
    connectionString: process.env.PG_CONNECTION
});

export default client;