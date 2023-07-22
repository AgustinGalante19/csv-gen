/**
 * @param {object} data Data will become the csv
 * @param {object} config this config let yo personalize how to generate te csv (filename, includeHeaders, separator, etc..)
 */
export default function generateCSV(
  { filename, includeHeaders, includeTitle, title, separator, qtLineBreak },
  data
) {
  let textToWrite = "";
  const headers = Object.keys(data[0]);

  if (includeTitle) {
    textToWrite = `${title}`;
    for (let i = 0; i < qtLineBreak; i++) {
      textToWrite += "\n";
    }
  }
  if (includeHeaders) {
    textToWrite += headers.join(separator) + "\n";
  }
  const rows = data.map((element) => {
    let values = [];
    for (let key of headers) {
      values.push(element[key]);
    }
    return values.join(separator);
  });
  textToWrite += rows.join("\n");
  const resultFileName = filename ? `${filename}.csv` : "data.csv";
  return { filename: resultFileName, content: textToWrite };
}
