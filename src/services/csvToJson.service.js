import * as csv from 'fast-csv';

const readCsv = (path, options) => {
  return new Promise((resolve, reject) => {
    const data = [];
    csv
      .parseFile(path, options)
      .on('error', reject)
      .on('data', (row) => {
        data.push(row);
      })
      .on('end', () => {
        resolve(data);
      });
  });
};

export const csvToJson = async (fileName, tableHeaders) => {
  try {
    const data = await readCsv(`csv_files/${fileName}.csv`, {
      headers: tableHeaders,
      trim: true,
      skipRows: 1
    });
    return data;
  } catch (error) {
    throw error;
  }
};
