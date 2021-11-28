import express from 'express';
import { csvToJson } from '../services/csvToJson.service.js';
import { normalizeRows } from '../services/normalizeData.js';
import { insertRowsIntoTable } from '../services/insertRowsToTable.service.js';
import { files } from '../utils/constants.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    for (const [key, object] of Object.entries(files)) {
      let fileCounter = 1;
      for (let j = 0; j < object.length; j++) {
        const dataFromCsv = await csvToJson(
          `file${fileCounter}`,
          object[j].columns
        );
        let normalizedData = normalizeRows(dataFromCsv, object[j].key);
        await insertRowsIntoTable(object[j].tableName, normalizedData);
      }
    }
    res.status(200).send('Data inserted successfully 😎');
  } catch (error) {
    console.log(error);
    res.status(400).send('Something went wrong 🤕');
  }
});

export default router;
