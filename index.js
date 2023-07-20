import people from "./db/people.json" assert { type: "json" };
import { writeFileSync } from "node:fs";

function generateCSV({
  filename,
  includeHeaders,
  includeTitle,
  title,
  data,
  separator,
  qtLineBreak,
}) {
  let textToWrite = "";
  const headers = Object.keys(data[0]);
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
  writeFileSync(`./temp/${filename}.csv`, textToWrite, { encoding: "utf-8" });
}

generateCSV({
  filename: "test 5",
  data: people,
  includeHeaders: false,
  includeTitle: false,
  separator: ",",
  qtLineBreak: 0,
  title: "",
});
