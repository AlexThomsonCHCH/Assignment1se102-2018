// This Page was added in SE101 Assignment 2 for the Table Generations.
// Provided on moodle by Amit Sarkar. 
// TODO: Tidy Up
// Page Commented by DEV: Alex T 28/08/2018

//Creates a blank table.
function makeTable (appendTo) {
    var newTable 
    newTable = document.createElement('table')
    newTable.setAttribute('border', '1')
    appendTo.appendChild(newTable)
    return newTable
  }
  
//adds Primary Headers to the table.
function addTableHeaders (theTable, ...allHeaders) {
    var newTableRow = document.createElement('tr')
    var newTableHeader
    for (let aHeader of allHeaders) {
      newTableHeader = document.createElement('th')
      newTableHeader.innerHTML = aHeader
      newTableRow.appendChild(newTableHeader)
    }
      theTable.appendChild(newTableRow)
}

//appends further headers to a table.
function addSecondaryHeaders (theHeader, ...allHeaders) {
    theFoundHeader= theHeader
    for (let aHeader of allHeaders) {
      newTableHeader = document.createElement('th')
      newTableHeader.innerHTML = aHeader
      theFoundHeader.appendChild(newTableHeader)
    }
}  

//appends data to a table row
function addTableData (theRow, ...allData) {
  var newTableData
  for (let data of allData) {
    newTableData = document.createElement('td')
    newTableData.innerHTML = data
    theRow.appendChild(newTableData)
  }
}

//appends further data to a target row
function addSecondaryData (theRow, ...allData) {
    theFoundData = theRow
    for (let aDataPoint of allData) {
      newTableDataPoint = document.createElement('td')
      newTableDataPoint.innerHTML = aDataPoint
      theFoundData.appendChild(newTableDataPoint)
    }
  }
  
