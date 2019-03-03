var excel = require("exceljs");
function report(){
var workbook1 = new excel.Workbook();
workbook1.creator = 'Me';
workbook1.lastModifiedBy = 'Me';
workbook1.created = new Date();
workbook1.modified = new Date();
var sheet1 = workbook1.addWorksheet('Sheet1');
var reHeader=['FirstName','LastName','Other Name'];
var reColumns=[
    {header:'FirstName',key:'wajid'},
    {header:'LastName',key:'lastname'},
    {header:'Other Name',key:'othername'}
];
sheet1.columns = reColumns;
workbook1.xlsx.writeFile("./uploads/error.xlsx").then(function() {
    console.log("xlsx file is written.");
});}

module.exports=report;