// This Page was added in SE101 Assignment 2 for the Sport Class.
// TODO: Nothing as of Page Commented
// Page Commented by DEV: Alex T 16/08/2018
/* global Pool Team Match matchResultsDiv resultsDiv teamResultsDiv View */

class Sport {// eslint-disable-line no-unused-vars
  constructor (newName, newVenue) {
    this.name = newName
    this.venue = newVenue
    this.allMyPools = []
    this.allMyTeams = []
    this.allMyMatches = []
  }
  // return Info as string value
  toString () {
    return `${this.name} at ${this.venue}`
  }

  // return a team from he allmyteams array
  findTeam (targetName) {
    return this.allMyTeams.find(aTeam => aTeam.name === targetName)
  }

  // add a new team
  addTeam (newName) {
    let aTeam = this.findTeam(newName)
    if (!aTeam) {
      // call team class
      aTeam = new Team(newName)
      this.allMyTeams.push(aTeam)
    }
    return aTeam
  }

  // sort teams by alphabetical name.
  sortTeams () {
    this.allMyTeams.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      } // a must be equal to b
      return 0
    })
  }

  // find a pool from all my pools
  findPool (targetName) {
    return this.allMyPools.find(aPool => aPool.name === targetName)
  }

  // sort pools alphabetically
  sortPools () {
    this.allMyPools.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      } // a must be equal to b
      return 0
    })
  }

  // add a new pool
  addPool (newName) {
    let name = newName.trim()
    let aPool = this.findPool(name)
    if (!aPool) {
      // calling pool class
      aPool = new Pool(name)
      this.allMyPools.push(aPool)
    }
    return aPool
  }

  // add a new match - DO NOT MISTREAT THIS METHOD, SHE WILL LEAVE YOU AND TAKE THE KIDS, THE HOUSE and THE MONEY
  addMatch (newYear, newMonth, newDay, newHour, newMinute, newPoolName, newTeamNameA, newTeamNameB) {
    // call a date class
    let when = new Date(newYear, newMonth, newDay, newHour, newMinute)
    let thePool = this.addPool(newPoolName)
    let teamA = this.addTeam(newTeamNameA)
    let teamB = this.addTeam(newTeamNameB)
    thePool.addTeam(teamA)
    thePool.addTeam(teamB)

    // call match class
    let newMatch = new Match(when, thePool, teamA, teamB)

    // push this match to arrays
    thePool.allMyMatches.push(newMatch) // This Was added in to fix data not being generated until getAll() was being called
    this.allMyMatches.push(newMatch)
  }

  // sort matches by date
  sortMatches () {
    this.allMyMatches.sort((a, b) => {
      if (a.when < b.when) {
        return -1
      }
      if (a.when > b.when) {
        return 1
      } // same time - now sort by pool
      return 0
    })
  }

  // return all teams into a list.
  getTeams () {
    this.sortTeams()
    let result = '*' + this.name + View.NEWLINE()
    for (let aTeam of this.allMyTeams) {
      result += aTeam + View.NEWLINE()
    }
    result += View.NEWLINE()
    return result
  }

  // return a list of teams in a pool
  getPools () {
    this.sortPools()
    let result = '*' + this.name + View.NEWLINE()
    for (let aPool of this.allMyPools) {
      result += aPool.getTeams() + View.NEWLINE()
    }
    return result
  }

  // sort matches to have the pool sorted to group them together
  sortMatchesByPool () {
    this.allMyMatches.sort((a, b) => {
      if (a.myPool.name < b.myPool.name) {
        return -1
      }
      if (a.myPool.name > b.myPool.name) {
        return 1
      } else {
        return 0
      }
    })
  }

  getMatchResults () {
    // group pool matches
    this.sortMatchesByPool()

    // create a div to host match results
    var sportgetmatchdiv = document.createElement('div')
    sportgetmatchdiv.className = 'sportDiv'

    // declare some vars for dynamic html generation
    var getMatchHeading = document.createElement('h3')
    var getMatchHeadingNode = document.createTextNode(this.name)
    sportgetmatchdiv.appendChild(getMatchHeading)
    var theTable = makeTable(sportgetmatchdiv)
    addTableHeaders(theTable, 'Pool', 'Team 1', 'Score', 'Team 2')

    // append match heading
    getMatchHeading.appendChild(getMatchHeadingNode)

    // loop a return of all matches for dynamic html paragraph
    for (let aMatch of this.allMyMatches) {
      var theRow = document.createElement('tr')
      addTableData(theRow, aMatch.myPool, aMatch.myTeamA, aMatch.scoreA + ' - ' + aMatch.scoreB, aMatch.myTeamB)
      theTable.appendChild(theRow)
    }
    // append all these childs to parents heirarchy

    matchResultsDiv.appendChild(sportgetmatchdiv)
  }

  // get matches which has either team as nz
  getNZMatches () {
    this.sortMatchesByPool()
    let result = '*' + this.name + View.NEWLINE()
    for (let aMatch of this.allMyMatches) {
      if (aMatch.hasTeam('New Zealand')) {
        result += aMatch + View.NEWLINE()
      }
    }
    return result
  }

  // find a specific match with two target teams
  findMatch (winner, looser) {
    return this.allMyMatches.find(aMatch => ((aMatch.myTeamA === winner && aMatch.myTeamB === looser) || (aMatch.myTeamB === winner && aMatch.myTeamA === looser)))
  }

  // add a result to our match NOTE: Only adds results to sport class.
  addPoolResult (winnerName, looserName, newWinnerScore, newLooserScore) {
    let winner = this.findTeam(winnerName)
    let looser = this.findTeam(looserName)
    let theMatch = this.findMatch(winner, looser)
    let scoreA = newWinnerScore
    let scoreB = newLooserScore
    if (theMatch.myTeamA.name !== winner.name) {
      scoreA = newLooserScore
      scoreB = newWinnerScore
    }
    theMatch.addResult(scoreA, scoreB)
  }

  // add short names to each team.
  addShortName (fullTeamName, shortTeamName) {
    let theTeam = this.findTeam(fullTeamName)
    theTeam.shortName = shortTeamName
  }

  // Produce our tabulated Table in Formatted Html Elements
  getResults () { // eslint-disable-line no-unused-vars
    // sort pools by name.
    this.sortPools()

    // Declare some vars
    var sportresultsdiv = document.createElement('div')
    sportresultsdiv.className = 'sportDiv'
    var getResultsHeading = document.createElement('h3')
    var getResultsHeadingNode = document.createTextNode(this.name)
    // append to parents
    getResultsHeading.appendChild(getResultsHeadingNode)
    sportresultsdiv.appendChild(getResultsHeading)

    for (let aPool of this.allMyPools) {
      // sort Teams
      aPool.sortTeams()

      var theTable = makeTable(sportresultsdiv)
      var newTableHeaderRow = document.createElement('tr')
      theTable.appendChild(newTableHeaderRow)
      addSecondaryHeaders(newTableHeaderRow, 'POOL ' + aPool.name)
      for (let aTeam of aPool.allMyTeams) {
        addSecondaryHeaders(newTableHeaderRow, aTeam.shortName)
        let TeamNameForTop = aTeam
        var newTeamResultsRow = document.createElement('tr')
        addSecondaryData(newTeamResultsRow, aTeam.shortName)
        for (let aTeamforSide of aPool.allMyTeams) {
          // stop values being returned for same team
          if (TeamNameForTop.shortName === aTeamforSide.shortName) {
            addSecondaryData(newTeamResultsRow, 'xxxxxxxx')
            theTable.appendChild(newTeamResultsRow)
          } else {
            let theMatch = this.findMatch(TeamNameForTop, aTeamforSide)
            let leftScore = theMatch.findScore(TeamNameForTop.name)
            let rightScore = theMatch.findScore(aTeamforSide.name)
            addSecondaryData(newTeamResultsRow, leftScore + ' - ' + rightScore)
          }
        }
      addSecondaryData(newTeamResultsRow, aTeam.matchesPlayed, aTeam.matchesWon, aTeam.matchesLost, aTeam.matchesDrawn, aTeam.scoreFor, aTeam.scoreAgainst)
      theTable.appendChild(newTeamResultsRow)
      }
      addSecondaryHeaders(newTableHeaderRow, 'Matches Played', 'Matches Won', 'Matches Lost', 'Matches Drawn', 'Points For', 'Points Against')
    }
    // Deprecated Code Removed 28/08/18
    // append to parent elements
    resultsDiv.appendChild(sportresultsdiv)
  }

  getTeamResults () {
    // sort Teams by name.
    this.sortTeams()

    // Declare some vars
    var sportgetteamsdiv = document.createElement('div')
    sportgetteamsdiv.className = 'sportDiv'

    var getTeamResultsHeading = document.createElement('h3')
    var getTeamResultsHeadingNode = document.createTextNode(this.name)
    // append to parents
    sportgetteamsdiv.appendChild(getTeamResultsHeading)

    // add table headers
    var theTable = makeTable(sportgetteamsdiv)
    addTableHeaders(theTable, 'Team', 'Matches Played', 'Matches Won', 'Matches Lost', 'Matches Drawn', 'Points For', 'Points Against')

    // append node
    getTeamResultsHeading.appendChild(getTeamResultsHeadingNode)

    // append table Data
    for (let aTeam of this.allMyTeams) {
      var theRow = document.createElement('tr')
      addTableData(theRow, aTeam.name, aTeam.matchesPlayed, aTeam.matchesWon, aTeam.matchesLost, aTeam.matchesDrawn, aTeam.scoreFor, aTeam.scoreAgainst)
      theTable.appendChild(theRow)
    }
    // append to parent elements
    teamResultsDiv.appendChild(sportgetteamsdiv)
  }
}
