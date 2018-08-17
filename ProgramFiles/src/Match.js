// This Page was added in SE101 Assignment 2 for the Match Class.
// TODO: Nothing as of Page Commented
// Page Commented by DEV: Alex T 16/08/2018
/* global */

class Match {// eslint-disable-line no-unused-vars
  constructor (when, thePool, teamA, teamB) {
    this.when = when
    this.myPool = thePool
    this.myTeamA = teamA
    this.myTeamB = teamB
    this.scoreA = null
    this.scoreB = null
  }

  //Searches Match Participants for a Team 
  hasTeam (targetName) {
    return this.myTeamA.name === targetName || this.myTeamB.name === targetName
  }

  //Returns Data of the class in a string format for use in a Display Function
  toString () {
    return `${this.myPool} ${this.myTeamA} vs ${this.myTeamB} ${this.scoreA} - ${this.scoreB}`
  }

  //Uses Results from addPoolResults.js to append information to the match.
  addResult (newScoreA, newScoreB) {
    //set variables
    this.scoreA = newScoreA
    this.scoreB = newScoreB

    //call functions from team class for both A and B to Give Information to the teams.
    this.myTeamA.incPlayed()
    this.myTeamA.incScoreFor(newScoreA)
    this.myTeamA.incScoreAgainst(newScoreB)

    this.myTeamB.incPlayed()
    this.myTeamB.incScoreFor(newScoreB)
    this.myTeamB.incScoreAgainst(newScoreA)

    //Add Win/lose Count to counter for corresponding teams
    if (newScoreA > newScoreB) {
      this.myTeamA.incWin()
      this.myTeamB.incLoss()
    }
    if (newScoreA < newScoreB) {
      this.myTeamB.incWin()
      this.myTeamA.incLoss()
    }
  }

  //Finds a score From a target Team
  findScore (targetTeamName) {
    let score = this.scoreA
    if (this.myTeamA.name === targetTeamName) {
      score = this.scoreB
    }
    return score
  }
}
