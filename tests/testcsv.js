const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

const filePath = path.join(__dirname, "../testdata/testdata.csv");
console.log("File Path:", filePath);  // Check if the file path is correct

const records = parse(
    fs.readFileSync(filePath, 'utf8'),
    {
        columns: true,
        skip_empty_lines: true,
    }
);

console.log(records);