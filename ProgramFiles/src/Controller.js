// This Page was added in SE101 Assignment 2 To add all the matches and initiate the tournament details.
// TODO: Move these into a CSV FILE in order to reduce code amount in this Section //next
// Page Commented by DEV: Alex T 16/08/2018

/* global Tournament */
class Controller {// eslint-disable-line no-unused-vars
  static setup (theTournament) {
    let APRIL = 3 // eslint-disable-line no-unused-vars
    let the2018Games = new Tournament('Gold Coast 2018 Commonwealth Games')
    for (let aSport of theTournament.sports) {
      let mySport = the2018Games.addSport(aSport.name, aSport.venue)
      for (let aMatch of aSport.allMyMatches) {
        let time = new Date(aMatch.when)
        let year = time.getFullYear()
        let month = time.getMonth()
        let day = time.getDay()
        let hour = time.getHours()
        let minute = time.getMinutes()

        let newPool = aMatch.pool
        let newTeamA = aMatch.teamA
        let newTeamB = aMatch.teamB

        mySport.addMatch(year, month, day, hour, minute, newPool, newTeamA, newTeamB)
      }
    }
    console.log(the2018Games)
    return the2018Games
  }
}
