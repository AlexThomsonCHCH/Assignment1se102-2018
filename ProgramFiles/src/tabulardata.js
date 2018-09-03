// This Page was added in SE101 Assignment 2 for the Table Generations.
// Some Functions provided on moodle by Amit Sarkar.
// TODO: Tidy Up and comment
// Page Commented by DEV: Alex T 28/08/2018

// Creates a blank table.
function makeTable (appendTo) { // eslint-disable-line no-unused-vars
  let newTable = document.createElement('table')
  newTable.setAttribute('border', '1')
  appendTo.appendChild(newTable)
  return newTable
}

// adds Primary Headers to the table.
function addTableHeaders (theTable, ...allHeaders) { // eslint-disable-line no-unused-vars
  let newTableRow = document.createElement('tr')
  for (let aHeader of allHeaders) {
    let newTableHeader = document.createElement('th')
    newTableHeader.innerHTML = aHeader
    newTableRow.appendChild(newTableHeader)
  }
  theTable.appendChild(newTableRow)
}

// appends further headers to a table.
function addSecondaryHeaders (theHeader, ...allHeaders) { // eslint-disable-line no-unused-vars
  let theFoundHeader = theHeader
  for (let aHeader of allHeaders) {
    let newTableHeader = document.createElement('th')
    newTableHeader.innerHTML = aHeader
    theFoundHeader.appendChild(newTableHeader)
  }
}

// appends data to a table row
function addTableData (theRow, ...allData) { // eslint-disable-line no-unused-vars
  var newTableData
  for (let data of allData) {
    newTableData = document.createElement('td')
    newTableData.innerHTML = data
    theRow.appendChild(newTableData)
  }
}

// deprecated function removed, no need for secondary data as regular function works. 29/08/18 AT
