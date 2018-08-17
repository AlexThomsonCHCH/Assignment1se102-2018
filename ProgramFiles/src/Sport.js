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
  //return Info as string value
  toString () {
    return `${this.name} at ${this.venue}`
  }

  //return a team from he allmyteams array
  findTeam (targetName) {
    return this.allMyTeams.find(aTeam => aTeam.name === targetName)
  }

  //add a new team
  addTeam (newName) {
    let aTeam = this.findTeam(newName)
    if (!aTeam) {
      //call team class
      aTeam = new Team(newName)
      this.allMyTeams.push(aTeam)
    }
    return aTeam
  }

  //sort teams by alphabetical name.
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

  //find a pool from all my pools
  findPool (targetName) {
    return this.allMyPools.find(aPool => aPool.name === targetName)
  }

  //sort pools alphabetically
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

  //add a new pool
  addPool (newName) {
    let name = newName.trim()
    let aPool = this.findPool(name)
    if (!aPool) {
      //calling pool class
      aPool = new Pool(name)
      this.allMyPools.push(aPool)
    }
    return aPool
  }

  //add a new match - DO NOT MISTREAT THIS METHOD, SHE WILL LEAVE YOU AND TAKE THE KIDS, THE HOUSE and THE MONEY
  addMatch (newYear, newMonth, newDay, newHour, newMinute, newPoolName, newTeamNameA, newTeamNameB) {
    //call a date class
    let when = new Date(newYear, newMonth, newDay, newHour, newMinute)
    let thePool = this.addPool(newPoolName)
    let teamA = this.addTeam(newTeamNameA)
    let teamB = this.addTeam(newTeamNameB)
    thePool.addTeam(teamA)
    thePool.addTeam(teamB)

    //call match class
    let newMatch = new Match(when, thePool, teamA, teamB)

    //push this match to arrays 
    thePool.allMyMatches.push(newMatch) // This Was added in to fix data not being generated until getAll() was being called
    this.allMyMatches.push(newMatch)
  }

  //sort matches by date
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

  //return all teams into a list.
  getTeams () {
    this.sortTeams()
    let result = '*' + this.name + View.NEWLINE()
    for (let aTeam of this.allMyTeams) {
      result += aTeam + View.NEWLINE()
    }
    result += View.NEWLINE()
    return result
  }

  //return a list of teams in a pool
  getPools () {
    this.sortPools()
    let result = '*' + this.name + View.NEWLINE()
    for (let aPool of this.allMyPools) {
      result += aPool.getTeams() + View.NEWLINE()
    }
    return result
  }

  //sort matches to have the pool sorted to group them together
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
    //group pool matches
    this.sortMatchesByPool()

    //create a div to host match results
    var sportgetmatchdiv = document.createElement('div')
    sportgetmatchdiv.className = 'sportDiv'

    //declare some vars for dynamic html generation
    var getMatchPara = document.createElement('p')
    var getMatchHeading = document.createElement('h3')
    var getMatchHeadingNode = document.createTextNode(this.name)

    //append match heading
    getMatchHeading.appendChild(getMatchHeadingNode)

    //loop a return of all matches for dynamic html paragraph
    for (let aMatch of this.allMyMatches) {
      let result = ''
      result += aMatch
      var paranode = document.createTextNode(result + '\n')
      //add text to paragraph
      getMatchPara.appendChild(paranode)
    }
    //append all these childs to parents heirarchy 
    sportgetmatchdiv.appendChild(getMatchHeading)
    sportgetmatchdiv.appendChild(getMatchPara)
    matchResultsDiv.appendChild(sportgetmatchdiv)
  }

  //get matches which has either team as nz
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

  //find a specific match with two target teams
  findMatch (winner, looser) {
    return this.allMyMatches.find(aMatch => ((aMatch.myTeamA === winner && aMatch.myTeamB === looser) || (aMatch.myTeamB === winner && aMatch.myTeamA === looser)))
  }

  //add a result to our match NOTE: Only adds results to sport class.
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

  //add short names to each team.
  addShortName (fullTeamName, shortTeamName) {
    let theTeam = this.findTeam(fullTeamName)
    theTeam.shortName = shortTeamName
  }
  
  //Produce our tabulated Table in Formatted Html Elements
  getResults () {
    //sort pools by name.
    this.sortPools()

    //Declare some vars
    var sportresultsdiv = document.createElement('div')
    sportresultsdiv.className = 'sportDiv'
    var getResultsPara = document.createElement('p')
    var getResultsHeading = document.createElement('h3')
    var getResultsHeadingNode = document.createTextNode(this.name)
    //append to parents
    getResultsHeading.appendChild(getResultsHeadingNode)
    sportresultsdiv.appendChild(getResultsHeading)

    //return results as a p for all pools
    for (let aPool of this.allMyPools) {
      let result = ''
      result += aPool.getResults()
      var paranode = document.createTextNode(result + '\n')
      getResultsPara.appendChild(paranode)
    }
    //append to parent elements
    sportresultsdiv.appendChild(getResultsHeading)
    sportresultsdiv.appendChild(getResultsPara)
    resultsDiv.appendChild(sportresultsdiv)
  }

  getTeamResults () {
    //sort Teams by name.
    this.sortTeams()

    //Declare some vars
    var sportgetteamsdiv = document.createElement('div')
    sportgetteamsdiv.className = 'sportDiv'
    var getTeamResultsPara = document.createElement('p')
    var getTeamResultsHeading = document.createElement('h3')
    var getTeamResultsHeadingNode = document.createTextNode(this.name)
    //append to parents
    getTeamResultsHeading.appendChild(getTeamResultsHeadingNode)
    sportgetteamsdiv.appendChild(getTeamResultsHeading)

    //return results as a p for all teams
    for (let aTeam of this.allMyTeams) {
      let result = View.padRight(aTeam) + ' '
      result += aTeam.getResults()
      var paranode = document.createTextNode(result + '\n')
      getTeamResultsPara.appendChild(paranode)
    }
    //append to parent elements
    sportgetteamsdiv.appendChild(getTeamResultsHeading)
    sportgetteamsdiv.appendChild(getTeamResultsPara)
    teamResultsDiv.appendChild(sportgetteamsdiv)
  }
}
