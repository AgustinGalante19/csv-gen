import Config from "./types/Config";

/**
 * @param {any[]} data Data will become the csv
 * @param {Config} config this config let yo personalize how to generate te csv (filename, includeHeaders, separator, etc..)
 */
export default function generateCSV(config: Config, data: any[]) {
  let textToWrite = "";
  const headers = Object.keys(data[0]);

  if (!config.separator) {
    config.separator = ",";
  }

  if (config.includeTitle) {
    textToWrite = `${config.title}`;

    if (!config.title) {
      config.title = "Custom title";
    }

    if (!config.qtLineBreak) {
      config.qtLineBreak = 1;
    }

    for (let i = 0; i <= config.qtLineBreak; i++) {
      textToWrite += "\n";
    }
  }

  if (config.includeHeaders) {
    textToWrite += headers.join(config.separator) + "\n";
  }

  const rows = data.map((element) => {
    let values = [];
    for (let key of headers) {
      values.push(element[key]);
    }
    return values.join(config.separator);
  });

  textToWrite += rows.join("\n");

  const resultFileName = config.filename
    ? `${config.filename}.csv`
    : "data.csv";

  return { filename: resultFileName, content: textToWrite };
}
