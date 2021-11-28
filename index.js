import express from 'express';
import env from 'dotenv';
import bodyParser from 'body-parser';
import populateDataRouter from './src/routes/populateData.route.js';

const app = express();

env.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.NODE_PORT;

app.use('/populateData', populateDataRouter);

app.get('/', async (req, res) => {
  res.status(200).send('LMS Project Rocks!!🤟');
});

app.listen(port, () => {
  console.log(`Project app listening at http://localhost:${port}`);
});
