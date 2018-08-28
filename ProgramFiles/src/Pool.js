// This Page was added in SE101 Assignment 2 for the pool Class.
// TODO: Nothing as of Page Commented
// Page Commented by DEV: Alex T 16/08/2018
/* global View */
class Pool {// eslint-disable-line no-unused-vars
  constructor (newName) {
    this.name = newName
    this.allMyTeams = []
    this.allMyMatches = []
  }

  // add team to the pool
  addTeam (aTeam) {
    if (!this.allMyTeams.includes(aTeam)) {
      this.allMyTeams.push(aTeam)
    }
    return aTeam
  }

  // sort teams in an alphabetical order. used for data returns
  sortTeams () {
    this.allMyTeams.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      } // a must be equal to b
      // String vs Int value??
      return 0
    })
  }

  // return a list of teams in alphabetical order
  getTeams () {
    // sort alphabetically
    this.sortTeams()
    // Return Pool name and add a new line
    let result = 'Pool ' + this.name + View.NEWLINE()
    // loop that spits all values out into a list
    for (let aTeam of this.allMyTeams) {
      result += View.TAB() + aTeam + View.NEWLINE()
    }
    // pass data back
    return result
  }

  // Returns Class Info as a String Value.
  toString () {
    return 'Pool ' + this.name
  }

  // FOUND IT >> This Function Should have been called during the add match in sport. Adds the Data to this internal array
  addMatch (aMatch) {
    this.allMyMatches.push(aMatch)
  }

  // sorts teams by matches won
  sortTeamsByRank () {
    this.allMyTeams.sort((a, b) => {
      if (a.matchesWon > b.matchesWon) {
        return -1
      }
      if (a.matchesWon < b.matchesWon) {
        return 1
      } // a must be equal to b
      // String vs INT?
      return 0
    })
  }

  // locates a match for individual usage from the allMyMatches array.
  findMatch (teamA, teamB) {
    return this.allMyMatches.find(aMatch => ((aMatch.myTeamA === teamA && aMatch.myTeamB === teamB) || (aMatch.myTeamB === teamA && aMatch.myTeamA === teamB)))
  }

  //Deprecated Function getResults() Removed 28/08/18 AT. For New Function See sport.getResults()
}
