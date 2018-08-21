// This Page was added in SE1022 Assignment 1 for the dynamic styling of webpage. Most color elements can be found here.
// TODO: Nothing as of Page Commented
// Page Commented by DEV: Alex T 17/08/2018
// create a class to easily change theme and styling of webpage.
class CountryStyle {
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
 
    // Lets Style the Flag Shit in the Background
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
    for (var i = 0; i < hTextColour.length; i++) {
      hTextColour[i].style.color = this.Foreground
    }
 
    var h3TextColour = document.querySelectorAll('h3')
    for (var i = 0; i < h3TextColour.length; i++) {
      h3TextColour[i].style.color = this.Background
    }
 
    var blurb = document.querySelectorAll('.blurb')
    for (var i = 0; i < blurb.length; i++) {
      blurb[i].style.color = this.Foreground
    }
 
    var line = document.querySelectorAll('.line-seperator')
    for (var i = 0; i < line.length; i++) {
      line[i].style.backgroundColor = this.Foreground
    }
 
    // styling our drop down menu now.
    ddmenu.style.color = this.Background
    ddmenu.style.backgroundColor = this.Foreground
  }
}
 
// Add all the Themes for countries
// To do:CSV File Maybe
var allMyThemes = []
allMyThemes.push(new CountryStyle('scotland', 'rgb(46, 129, 202)', 'white'))
allMyThemes.push(new CountryStyle('australia', '#255a39', 'gold'))
allMyThemes.push(new CountryStyle('england', 'red', 'white'))
allMyThemes.push(new CountryStyle('jamaica', 'green', 'yellow'))
//Testing:
//allMyThemes.push(new CountryStyle('nyet', 'red', 'yellow'))
 
// Calling The Theme Change
function themechange () {
  let aTheme = this.allMyThemes.find(aTheme => (aTheme.Country === document.form2.jumpmenu.value))
  aTheme.turnThisWPRad()
}