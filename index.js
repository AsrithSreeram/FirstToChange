let csvToJson = require('convert-csv-to-json')

// Read Csv

let data = csvToJson
  .parseSubArray(',',',')
  .fieldDelimiter(',')
  .formatValueByType()
  .getJsonFromCsv("resources/CDP_Community_GHG_Emissions_2016-20_Pixel_Cities.csv")

console.log(data)

// Append Table