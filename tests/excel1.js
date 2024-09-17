const ExcelJS = require('exceljs');
const path = require('path');

async function readExcel() {
    // Create a new workbook instance
    const workbook = new ExcelJS.Workbook();

    // Load the Excel file
    const filePath = path.join(__dirname, '../testdata/sample.xlsx');
    await workbook.xlsx.readFile(filePath);

    // Access the first worksheet
    const worksheet = workbook.getWorksheet(1);

    // Loop through each row and log the data
    worksheet.eachRow((row, rowNumber) => {
        console.log(`Row ${rowNumber}:`, row.values);
    });
}

readExcel();