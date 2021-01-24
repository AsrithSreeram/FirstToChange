let csvToJson = require('convert-csv-to-json')

// Read Csv

let data = csvToJson
  .parseSubArray(',',',')
  .fieldDelimiter(',')
  .formatValueByType()
  .getJsonFromCsv("resources/CDP_Community_GHG_Emissions_2016-20_Pixel_Cities.csv")

// Sort data by overall rating
data.sort(function(a, b) {
  return b.overallScore - a.overallScore;
});

console.log(data[0])
console.log(data[data.length-1])

// // Append Table
// const tableRef = document.getElementsByClassName('leaderboard').getElementsByTagName('tbody')[0];

// // Insert a row at the end of table
// for (let i = 0; i < data.length; i++){
//   // insert row
//   let tableRef = document.getElementById(tableID);
//   let newRow = tableRef.insertRow(-1);
//   // add city
//   let newCell = newRow.insertCell(0);
//   let newText = document.createTextNode(data[i].city);
//   newCell.appendChild(newText);
//    // add country
//    let newCell5 = newRow.insertCell(1);
//    let newText5 = document.createTextNode(data[i].country);
//    newCell5.appendChild(newText5);
//   // add overall score
//   let newCell2 = newRow.insertCell(2);
//   let newText2 = document.createTextNode(data[i].overallScore);
//   newCell2.appendChild(newText2);
//   // add transparancy score
//   let newCell3 = newRow.insertCell(3);
//   let newText3 = document.createTextNode(data[i].transparencyScore);
//   newCell3.appendChild(newText3);
//   // add emissions impact score
//   let newCell4 = newRow.insertCell(4);
//   let newText4 = document.createTextNode(data[i].emissionsImpactScore);
//   newCell4.appendChild(newText4);
// }
