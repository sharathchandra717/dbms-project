export const normalizeRows = (csvRows, key) => {
  const data = [];
  let isInserted = [];
  for (let index = 0; index < csvRows.length; index++) {
    if (!isInserted.includes(csvRows[index][key])) {
      data.push(csvRows[index]);
      isInserted.push(csvRows[index][key]);
    }
  }
  return data;
};
