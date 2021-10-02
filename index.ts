export function json2Csv(jsonArray: any) {
  if (!jsonArray || (jsonArray && jsonArray.length === 0)) {
    return;
  }
  const data = [...jsonArray];
  const replacer = (key: any, value: string) => (value !== null ? value : '');

  const entityKeys = data && Object.keys(data[0]);
  const headers = entityKeys.map(key => key[0].toUpperCase() + key.slice(1));

  const csv = data.map(row => {
    const updatedRow = entityKeys.map(key => row[key]);
    return updatedRow.map(value => JSON.stringify(value, replacer)).join();
  });
  csv.unshift(headers.join());
  return csv.join('\r\n');
}
