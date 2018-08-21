// This Page was added in SE101 Assignment 2 for the Team Class.
// TODO: Nothing as of Page Commented
// Page Commented by DEV: Alex T 17/08/2018
/* global View */
class Team {// eslint-disable-line no-unused-vars
  constructor (newName) {
    this.name = newName
    this.shortName = ''
    this.matchesPlayed = 0
    this.matchesWon = 0
    this.matchesLost = 0
    this.matchesDrawn = 0
    this.scoreFor = 0
    this.scoreAgainst = 0
    this.poolRank = 0
  }
  // add a win to wincounter
  incWin () {
    this.matchesWon += 1
  }
  // add a lose to losecounter
  incLoss () {
    this.matchesLost += 1
  }
  // add a match to matchcounter
  incPlayed () {
    this.matchesPlayed += 1
  }
  // add score from a match to the total points scored for
  incScoreFor (newScoreFor) {
    this.scoreFor += newScoreFor
  }
  // add score from a match to the total points scored against
  incScoreAgainst (newScoreAgainst) {
    this.scoreAgainst += newScoreAgainst
  }
  // return information in a string format
  toString () {
    return this.name
  }
  // return results as a table.
  getResults () {
    let result = ''
    result += View.padRight(this.matchesPlayed)
    result += View.padRight(this.matchesWon)
    result += View.padRight(this.matchesLost)
    result += View.padRight(this.matchesDrawn)
    result += View.padRight(this.scoreFor)
    result += this.scoreAgainst
    return result
  }
}
