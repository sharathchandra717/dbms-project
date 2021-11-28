import db from '../db/knexfile.js';

export const insertRowsIntoTable = async (tableName, normalizedDataRows) => {
  try {
    await db.batchInsert(tableName, normalizedDataRows);
  } catch (error) {
    throw error;
  }
};
