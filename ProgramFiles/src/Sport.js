class Sport {
  constructor (newName, newVenue) {
    this.name = newName
    this.venue = newVenue
    this.allMyPools = []
    this.allMyTeams = []
    this.allMyMatches = []
  }
  toString() {
      return `${this.name} at ${this.venue}`
  }
  findTeam (targetName) {
    return this.allMyTeams.find(aTeam => aTeam.name === targetName)
  }
  addTeam(newName){
    let aTeam = this.findTeam(newName) 
    if (! aTeam) {
      aTeam = new Team(newName)
      this.allMyTeams.push(aTeam)
    }
    return aTeam
  }
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

  findPool (targetName) {
     return this.allMyPools.find(aPool => aPool.name === targetName)
  }
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
     {
    let name = newName.trim()
    let aPool = this.findPool(name) 
    if (! aPool) {
      aPool = new Pool(name)
      this.allMyPools.push(aPool)
    }
    return aPool
  }
  addMatch(newYear, newMonth, newDay, newHour, newMinute, newPoolName, newTeamNameA, newTeamNameB){
    let when = new Date(newYear, newMonth, newDay, newHour, newMinute)
    let thePool = this.addPool(newPoolName)
    let teamA = this.addTeam(newTeamNameA)
    let teamB = this.addTeam(newTeamNameB)
    thePool.addTeam(teamA)
    thePool.addTeam(teamB)
    let newMatch = new Match(when, thePool, teamA, teamB)
    this.allMyMatches.push(newMatch)
    }
  sortMatches() {
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
  getTeams() {
    this.sortTeams()
    let result = '*' + this.name + View.NEWLINE()
    for (let aTeam of this.allMyTeams) {
      result += aTeam + View.NEWLINE()
    }
    result += View.NEWLINE()
    return result
  }
  getPools () {
    this.sortPools()
    let result = '*' + this.name + View.NEWLINE()
    for (let aPool of this.allMyPools) {
      result += aPool.getTeams() + View.NEWLINE()
    }
    return result
  }
  
  
  sortMatchesByPool ()  {
    this.allMyMatches.sort((a,b) => {
      if (a.myPool.name < b.myPool.name) {
        return -1
      }
      if (a.myPool.name > b.myPool.name) {
        return 1
      }
       else{
         return 0
       }
  })
    
  }
  
  getMatchResults () {
    this.sortMatchesByPool()

    var sportgetmatchdiv = document.createElement('div')
    sportgetmatchdiv.className = 'sportDiv'

    var getMatchPara = document.createElement('p')
    var getMatchHeading = document.createElement('h3')
    var getMatchHeadingNode = document.createTextNode(this.name)

    getMatchHeading.appendChild(getMatchHeadingNode)

    for (let aMatch of this.allMyMatches) {
      let result = ''
      result += aMatch
      var paranode = document.createTextNode(result+ '\n')
      getMatchPara.appendChild(paranode)
    }
    sportgetmatchdiv.appendChild(getMatchHeading)
    sportgetmatchdiv.appendChild(getMatchPara)
    matchResultsDiv.appendChild(sportgetmatchdiv)
  }
  
  
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
  //--------------------------------------------------------------------------
  findMatch(winner, looser) {
   return this.allMyMatches.find(aMatch => ((aMatch.myTeamA === winner && aMatch.myTeamB === looser) || (aMatch.myTeamB === winner && aMatch.myTeamA === looser)))
  }
  
  addPoolResult (winnerName, looserName, newWinnwerScore, newLooserScore) {
    let winner = this.findTeam(winnerName)
    let looser = this.findTeam(looserName)
    let theMatch = this.findMatch(winner, looser)
    let scoreA = newWinnwerScore
    let scoreB = newLooserScore
    if (theMatch.myTeamA.name !== winner.name){
      scoreA = newLooserScore
      scoreB = newWinnwerScore
    }
    theMatch.addResult(scoreA, scoreB)
  }

  addShortName (fullTeamName, shortTeamName){
    let theTeam = this.findTeam(fullTeamName)
    theTeam.shortName = shortTeamName
  }
  
  getResults () {
    var head3 = document.createElement("h3")
    var para = document.createElement('p')
    var element = document.getElementById("divDisplay");
    var nodeSportName = document.createTextNode(`Results for ${this.name}` + View.NEWLINE())
    head3.appendChild(nodeSportName)
    element.appendChild(head3)
    this.sortPools()
    for (let aMatch of this.allMyMatches) {
      let thePool = aMatch.myPool
      thePool.addMatch(aMatch)
    }
    
    for (let aPool of this.allMyPools) {
      var nodePool = document.createTextNode(aPool + View.NEWLINE + aPool.getResults())
      para.appendChild(nodePool)
    }
    element.appendChild(para)
  }
  
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
  
  
  getTeamResults() {
    this.sortTeams()

    var sportgetteamsdiv = document.createElement('div')
    sportgetteamsdiv.className = 'sportDiv'

    var getTeamResultsPara = document.createElement('p')
    var getTeamResultsHeading = document.createElement("h3")
    var getTeamResultsHeadingNode = document.createTextNode(this.name)
    getTeamResultsHeading.appendChild(getTeamResultsHeadingNode)
    sportgetteamsdiv.appendChild(getTeamResultsHeading)


    for (let aTeam of this.allMyTeams) {
      let result = ''
      result += aTeam.getResults()
      var paranode = document.createTextNode(result + '\n')
      getTeamResultsPara.appendChild(paranode)
    }
    sportgetteamsdiv.appendChild(getTeamResultsHeading)
    sportgetteamsdiv.appendChild(getTeamResultsPara)
    teamResultsDiv.appendChild(sportgetteamsdiv)
  }
}