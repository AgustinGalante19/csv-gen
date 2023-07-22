# CSV Generator

[![npm version](https://badge.fury.io/js/csv-gen-agustin.svg)](https://badge.fury.io/js/csv-gen-agustin)

## Description

CSV Generator is a library that generates CSV formatted strings from an array of objects, making it easy to export data in a CSV format. It provides a single function `generateCSV` that takes in two parameters: a configuration object and an array of objects to export.

# Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Configuration Interface](#Configuration-Interface)

## Installation

To use the library in your project, you can install it via npm:

```bash
npm install csv-gen-agustin
```

## Usage

Import the generateCSV function and use it to generate CSV strings from your data:

```js
import generateCSV from "csv-gen-agustin";

const dataToExport = [
  { name: "Agustin", age: 20 },
  { name: "Jhon", age: 25 },
  // Add more objects as needed
];

// Configuration object
const config = {
  filename: "data",
  includeHeaders: true,
  includeTitle: true,
  title: "My Data Report",
  separator: ",",
  qtLineBreak: 1,
};

// Generate the CSV string
const csvString = generateCSV(config, dataToExport);

console.log(csvString);
```

## Configuration Interface

```ts
interface Config {
  filename: string; // The name of the file to be downloaded (excluding the file extension)
  includeHeaders: boolean; // Set to true to include column headers in the CSV
  includeTitle: boolean; // Set to true to include a title in the CSV
  title: string; // The title to be included in the CSV (if includeTitle is true)
  separator: string; // The CSV field separator (usually ',' or ';')
  qtLineBreak: number; // The number of line breaks between data rows
}
```
