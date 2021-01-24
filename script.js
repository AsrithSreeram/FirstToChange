const tabulate = function (data,columns) {
  const table = d3.select('.leaderboard')
	const thead = table.append('thead')
	const tbody = table.append('tbody')

	thead.append('tr')
	  .selectAll('th')
	    .data(columns)
	    .enter()
	  .append('th')
	    .text(function (d) { return d })

	const rows = tbody.selectAll('tr')
	    .data(data)
	    .enter()
	  .append('tr')

	const cells = rows.selectAll('td')
	    .data(function(row) {
	    	return columns.map(function (column) {
	    		return { column: column, value: row[column] }
	      })
      })
      .enter()
    .append('td')
      .text(function (d) { return d.value })

  return table;
}

d3.csv('resources/CDP_Community_GHG_Emissions_2016-20_Pixel_Cities.csv',function (data) {
	var columns = ['city','country','transparencyScore','emissionsImpactScore','overallScore']
  tabulate(data,columns)
})