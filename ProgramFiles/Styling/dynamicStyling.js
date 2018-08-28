// This Page was added in SE1022 Assignment 1 for the dynamic styling of webpage. Most color elements can be found here.
// TODO: Nothing as of Page Commented
// Page Commented by DEV: Alex T 19/08/2018

// lets create a list to store all our themes themes
var allMyThemes = []

// create a class to easily change theme and styling of webpage.
class CountryStyle {// eslint-disable-line no-unused-vars
  constructor (Country, Background, Foreground) {
    this.Country = Country
    this.Background = Background
    this.Foreground = Foreground
  }

  // Function that will generate dynamic styling based on provided values
  turnThisWPRad () {
    // Declare Variables for targeting
    var bg = document.getElementById('body')
    var mainbg = document.getElementById('main')
    var ddmenu = document.getElementById('TeamSelector')

    // Lets Style the Flag in the Background
    bg.style.background = 'linear-gradient(transparent ,white 90%), url(Styling/images/' + this.Country + '.png)'
    bg.style.backgroundRepeat = 'repeat-y'
    bg.style.backgroundAttachment = 'fixed'
    bg.style.backgroundSize = 'cover'

    // Lets Style our page colors
    var coloured = document.querySelectorAll('.dynamicColoured')
    for (var i = 0; i < coloured.length; i++) {
      coloured[i].style.backgroundColor = this.Background
    }

    mainbg.style.backgroundColor = this.Foreground
    mainbg.style.opacity = 0.9

    // lets Style our Text Now
    var hTextColour = document.querySelectorAll('h1, h2')
    for (var a = 0; a < hTextColour.length; a++) {
      hTextColour[a].style.color = this.Foreground
    }

    var h3TextColour = document.querySelectorAll('h3')
    for (var b = 0; b < h3TextColour.length; b++) {
      h3TextColour[b].style.color = this.Background
    }

    var blurb = document.querySelectorAll('.blurb')
    for (var c = 0; c < blurb.length; c++) {
      blurb[c].style.color = this.Foreground
    }

    var line = document.querySelectorAll('.line-seperator')
    for (var d = 0; d < line.length; d++) {
      line[d].style.backgroundColor = this.Foreground
    }

    // styling our drop down menu now.
    ddmenu.style.color = this.Background
    ddmenu.style.backgroundColor = this.Foreground
  }
}

// Add all the Themes for countries to our theme array
// To do:CSV File Maybe
allMyThemes.push(new CountryStyle('australia', '#255a39', 'gold'))
allMyThemes.push(new CountryStyle('barbados', '#00267F', '#FFC726'))
allMyThemes.push(new CountryStyle('canada', 'red', 'white'))
allMyThemes.push(new CountryStyle('england', 'red', 'white'))
allMyThemes.push(new CountryStyle('Fiji', '#68BFE5', 'white'))
allMyThemes.push(new CountryStyle('jamaica', 'green', 'yellow'))
allMyThemes.push(new CountryStyle('kenya', 'black', '#BB0000'))
allMyThemes.push(new CountryStyle('malawi', 'black', '#BB0000'))
allMyThemes.push(new CountryStyle('malaysia', '#010066', 'white'))
allMyThemes.push(new CountryStyle('newzealand', '#00247D', 'white'))
allMyThemes.push(new CountryStyle('northernireland', 'red', 'white'))
allMyThemes.push(new CountryStyle('papuang', '#CE1126', '#FCD116'))
allMyThemes.push(new CountryStyle('samoa', '#002B7F', '#CE1126'))
allMyThemes.push(new CountryStyle('scotland', 'rgb(46, 129, 202)', 'white'))
allMyThemes.push(new CountryStyle('southafrica', '#007A4D', 'white'))
allMyThemes.push(new CountryStyle('srilanka', '#8D153A', '#FFBE29'))
allMyThemes.push(new CountryStyle('uganda', 'black', '#FCDC04'))
allMyThemes.push(new CountryStyle('wales', '#00AB39', 'white'))
allMyThemes.push(new CountryStyle('zambia', '#198A00', 'orange'))

// Testing:
// allMyThemes.push(new CountryStyle('nyet', 'red', 'yellow'))
console.log(allMyThemes)
// Calling The Theme Change
function themechange () { // eslint-disable-line no-unused-vars
  let aTheme = this.allMyThemes.find(aTheme => (aTheme.Country === document.form2.jumpmenu.value))
  aTheme.turnThisWPRad()
}
