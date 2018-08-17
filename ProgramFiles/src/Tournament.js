// This Page was added in SE101 Assignment 2 for the Tournament Class.
// TODO: Nothing as of Page Commented
// Page Commented by DEV: Alex T 17/08/2018

/* global Sport View matchResultsDiv teamResultsDiv resultsDiv allreturn */
// eslint-disable no-unused-vars
class Tournament {// eslint-disable-line no-unused-vars
  constructor (newName) {
    this.name = newName
    this.allMySports = []
  }

  //return class information as a string
  toString () {
    return this.name
  }

  //add a sport to the tournament
  addSport (newName, newVenue) {
    let newSport = new Sport(newName, newVenue)
    this.allMySports.push(newSport)
    return newSport
  }

  //return sports as a string list
  getSports () {
    let result = ''
    for (let aSport of this.allMySports) {
      result += aSport + View.NEWLINE()
    }
    return result
  }

  //return all teams of a sport 
  getTeams () {
    let result = ''
    for (let aSport of this.allMySports) {
      result += aSport.getTeams() + View.NEWLINE()
    }
    return result
  }
  //return all pools of a sport in string form
  getPools () {
    let result = ''
    for (let aSport of this.allMySports) {
      result += aSport.getPools() + View.NEWLINE()
    }
    return result
  }
  //return all matches of a sport in string form
  getMatches () {
    let result = ''
    for (let aSport of this.allMySports) {
      result += aSport.getMatches() + View.NEWLINE()
    }
    return result
  }
  //return all matches of a sport that have nz as a team in string form
  getNZMatches () {
    let result = ''
    for (let aSport of this.allMySports) {
      result += aSport.getNZMatches() + View.NEWLINE()
    }
    return result
  }

  //Finds all teams participating in all 3 sports
  getParticipation () {
    let netballSet = new Set()
    for (let aTeam of this.allMySports[0].allMyTeams) {
      netballSet.add(aTeam.name)
    }
    let mens7sSet = new Set()
    for (let aTeam of this.allMySports[1].allMyTeams) {
      mens7sSet.add(aTeam.name)
    }
    let womens7sSet = new Set()
    for (let aTeam of this.allMySports[2].allMyTeams) {
      womens7sSet.add(aTeam.name)
    }
    var all3Set = netballSet.intersection(mens7sSet) // eslint-disable-line no-unused-vars
    all3Set = all3Set.intersection(womens7sSet)
  }
  //returns table of all results for that sport
  getResults () {
    let result = ''
    for (let aSport of this.allMySports) {
      result += aSport.getResults() + View.NEWLINE()
    }
    return result
  }
  //returns match results of the sport
  getMatchResults () {
    for (let aSport of this.allMySports) {
      aSport.getMatchResults()
    }
  }
  //returns info of a team in a sport including wins, losses etc
  getTeamResults () {
    let result = ''
    for (let aSport of this.allMySports) {
      result += aSport.getTeamResults() + View.NEWLINE()
    }
    return result
  }

  //This is Just a styling element. Blurb in top right. (This was developed for Iteration3, But added alongside IT2)
  getBlurb () {
    //Create Vars and assign some classinfo for styling
    var getBlurbPara1 = document.createElement('p')
    var getBlurbPara2 = document.createElement('p')
    var getBlurbPara3 = document.createElement('p')
    getBlurbPara1.className = 'blurb'
    getBlurbPara2.className = 'blurb'
    getBlurbPara3.className = 'blurb'
    //Insert Text into nodes
    var getBlurbPara1Node = document.createTextNode('The Gold Coast 2018 Commonwealth Games (GC2018) Welcomed more than 6,600 athletes and team officials from 71 Commonwealth nations and territories to the Gold Coast and event cities Brisbane, Cairns and Townsville, to share in the celebration of sport, entertainment and culture.')
    var getBlurbPara2Node = document.createTextNode('This was the largest sporting event staged in Australia this decade, and featured the largest integrated sports program in Commonwealth Games history, comprising 18 sports and seven para-sports.')
    var getBlurbPara3Node = document.createTextNode("This Website documents some results from GC2018 including Netball, Men's Rugby Sevens and Women's Rugby Sevens.")
    //append to parents
    getBlurbPara1.appendChild(getBlurbPara1Node)
    getBlurbPara2.appendChild(getBlurbPara2Node)
    getBlurbPara3.appendChild(getBlurbPara3Node)
    blurbDiv.appendChild(getBlurbPara1)
    blurbDiv.appendChild(getBlurbPara2)
    blurbDiv.appendChild(getBlurbPara3)

    // create Seperator
    var seperator = document.createElement('div')
    seperator.className = 'line-seperator'
    //append all to parent div
    teamResultsDiv.appendChild(blurbDiv)
    teamResultsDiv.appendChild(seperator)
  }

  //returns everything to the page
  getAll () {
    // create structure for match results
    var head2_1 = document.createElement('h2')
    var head2_1Node = document.createTextNode('Match Results')
    head2_1.appendChild(head2_1Node)
    matchResultsDiv.appendChild(head2_1)
    allreturn.appendChild(matchResultsDiv)

    // Create Structure for Blurb
    var head2_4 = document.createElement('h2')
    var head2_4Node = document.createTextNode('Welcome To The 2018 Commonwealth Games')
    head2_4.appendChild(head2_4Node)
    blurbDiv.appendChild(head2_4)
    this.getBlurb()

    // create structure for team results
    var head2_2 = document.createElement('h2')
    var head2_2Node = document.createTextNode('Team Results')
    head2_2.appendChild(head2_2Node)
    teamResultsDiv.appendChild(head2_2)
    allreturn.appendChild(teamResultsDiv)

    // create structure for all results
    var head2_3 = document.createElement('h2')
    var head2_3Node = document.createTextNode('All Matches Results')
    head2_3.appendChild(head2_3Node)
    resultsDiv.appendChild(head2_3)
    allreturn.appendChild(resultsDiv)

    // generate all results
    this.getMatchResults()
    this.getTeamResults()
    this.getResults()

    // append all dynamic content
    let theDisplay = document.getElementById('divDisplay')
    theDisplay.appendChild(allreturn)

    // apply our base theme
    let aTheme = allMyThemes.find(aTheme => (aTheme.Country === 'scotland'))
    aTheme.turnThisShitrad()
  }

  //finds a target sport in allmysports.
  findSport (targetName) {
    return this.allMySports.find(aSport => aSport.name === targetName)
  }
}
