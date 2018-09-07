// This Page was added in SE101 Assignment 2 for the Tournament Class.
// TODO: Nothing as of Page Commented
// Page Commented by DEV: Alex T 17/08/2018

/* global the2018Games Controller addPoolResults addShortNames FileReader alert */

var loadedHandler = function (event) { // eslint-disable-line no-unused-vars
  var myData = JSON.parse(event.target.result)
  the2018Games = Controller.setup(myData)
  addPoolResults(the2018Games)
  addShortNames(the2018Games)
}

var fileChangeHandler = function (event) { // eslint-disable-line no-unused-vars
  var reader = new FileReader()
  reader.onload = loadedHandler
  console.log('Your file has been loaded')
  alert('Match data has been uploaded')
  var theFile = event.target.files[0]
  reader.readAsText(theFile)
}
