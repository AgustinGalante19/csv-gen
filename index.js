"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {any[]} data Data will become the csv
 * @param {Config} config this config let yo personalize how to generate te csv (filename, includeHeaders, separator, etc..)
 */
function generateCSV(config, data) {
    var textToWrite = "";
    var headers = Object.keys(data[0]);
    if (!config.separator) {
        config.separator = ",";
    }
    if (config.includeTitle) {
        textToWrite = "".concat(config.title);
        if (!config.title) {
            config.title = "Custom title";
        }
        if (!config.qtLineBreak) {
            config.qtLineBreak = 1;
        }
        for (var i = 0; i <= config.qtLineBreak; i++) {
            textToWrite += "\n";
        }
    }
    if (config.includeHeaders) {
        textToWrite += headers.join(config.separator) + "\n";
    }
    var rows = data.map(function (element) {
        var values = [];
        for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
            var key = headers_1[_i];
            values.push(element[key]);
        }
        return values.join(config.separator);
    });
    textToWrite += rows.join("\n");
    var resultFileName = config.filename
        ? "".concat(config.filename, ".csv")
        : "data.csv";
    return { filename: resultFileName, content: textToWrite };
}
exports.default = generateCSV;
