const fs = require('fs')
const fastcsv = require('fast-csv')
const csv = require('@fast-csv/parse')

// Read Csv

// interface CitiesCsvRow {
//   id: string;
//   cityName: string;
//   country: string;
//   transparancyScore: float;
//   emissionsImpactScore: float;
//   overallScore: float;
// }

// interface CitiesDetailsRow {
//   id: number;
//   cityName: string;
//   country: string;
//   region: string;
//   reportsMade: integer;
//   mostRecentYear: integer;
//   usesStandardProtocol: boolean;
//   GHGReported: integer;
//   totalEmissions: float;
//   perCaptiaEmissions: float;
//   population: bigInt;
//   trajectory: string;
// }

const stream = fs.createReadStream('resources/CDP_Community_GHG_Emissions_2016-20_Pixel_Cities.csv')

let csvData = []

csv.parseStream(stream)
    .on('error', error => console.error(error))
    .on('data', function(data) {
      csvData.push(data)
    })
    .on('end', function() {
      // remove the first line: header
      csvData.shift()
      console.log(csvData)
    });


// Append Table