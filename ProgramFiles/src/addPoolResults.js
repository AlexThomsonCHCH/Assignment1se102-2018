// This Page was added in SE101 Assignment 3 to add results to all of the matches displayed in se101 Assignment 2
// TODO: Move these into a CSV FILE in order to reduce code amount in this Section
// Page Commented by DEV: Alex T 16/08/2018

var addPoolResults = function (theTournament) { // eslint-disable-line no-unused-vars
  // NetBall
  let aSport = theTournament.findSport('Netball')
  aSport.addPoolResult('Australia', 'Jamaica', 72, 51)
  aSport.addPoolResult('Australia', 'South Africa', 60, 38)
  aSport.addPoolResult('Australia', 'Northern Ireland', 94, 26)
  aSport.addPoolResult('Australia', 'Barbados', 79, 24)
  aSport.addPoolResult('Australia', 'Fiji', 108, 23)
  aSport.addPoolResult('Jamaica', 'South Africa', 57, 46)
  aSport.addPoolResult('Jamaica', 'Northern Ireland', 79, 41)
  aSport.addPoolResult('Jamaica', 'Barbados', 76, 32)
  aSport.addPoolResult('Jamaica', 'Fiji', 88, 30)
  aSport.addPoolResult('South Africa', 'Northern Ireland', 49, 35)
  aSport.addPoolResult('South Africa', 'Barbados', 85, 25)
  aSport.addPoolResult('South Africa', 'Fiji', 92, 28)
  aSport.addPoolResult('Northern Ireland', 'Barbados', 49, 39)
  aSport.addPoolResult('Northern Ireland', 'Fiji', 73, 46)
  aSport.addPoolResult('Barbados', 'Fiji', 65, 44)
  aSport.addPoolResult('England', 'New Zealand', 54, 45)
  aSport.addPoolResult('England', 'Uganda', 55, 49)
  aSport.addPoolResult('England', 'Malawi', 74, 49)
  aSport.addPoolResult('England', 'Scotland', 74, 28)
  aSport.addPoolResult('England', 'Wales', 85, 31)
  aSport.addPoolResult('New Zealand', 'Uganda', 64, 51)
  aSport.addPoolResult('New Zealand', 'Malawi', 53, 57)
  aSport.addPoolResult('New Zealand', 'Scotland', 60, 29)
  aSport.addPoolResult('New Zealand', 'Wales', 70, 44)
  aSport.addPoolResult('Uganda', 'Malawi', 54, 52)
  aSport.addPoolResult('Uganda', 'Scotland', 57, 37)
  aSport.addPoolResult('Uganda', 'Wales', 76, 40)
  aSport.addPoolResult('Malawi', 'Scotland', 51, 50)
  aSport.addPoolResult('Malawi', 'Wales', 68, 53)
  aSport.addPoolResult('Scotland', 'Wales', 51, 47)

  // Men's Rugby Sevens
  aSport = theTournament.findSport('Men\'s Rugby Sevens')
  aSport.addPoolResult('Australia', 'Samoa', 24, 7)
  aSport.addPoolResult('England', 'Jamaica', 38, 5)
  aSport.addPoolResult('Canada', 'Kenya', 10, 26)
  aSport.addPoolResult('New Zealand', 'Zambia', 54, 0)
  aSport.addPoolResult('Wales', 'Uganda', 31, 5)
  aSport.addPoolResult('Fiji', 'Sri Lanka', 63, 5)
  aSport.addPoolResult('Scotland', 'Papua New Guinea', 27, 0)
  aSport.addPoolResult('South Africa', 'Malaysia', 43, 0)
  aSport.addPoolResult('Australia', 'Jamaica', 32, 5)
  aSport.addPoolResult('England', 'Samoa', 33, 0)
  aSport.addPoolResult('Canada', 'Zambia', 47, 0)
  aSport.addPoolResult('New Zealand', 'Kenya', 40, 7)
  aSport.addPoolResult('Wales', 'Sri Lanka', 42, 12)
  aSport.addPoolResult('Fiji', 'Uganda', 54, 0)
  aSport.addPoolResult('Scotland', 'Malaysia', 41, 0)
  aSport.addPoolResult('South Africa', 'Papua New Guinea', 52, 0)
  aSport.addPoolResult('Samoa', 'Jamaica', 36, 7)
  aSport.addPoolResult('England', 'Australia', 26, 17)
  aSport.addPoolResult('Kenya', 'Zambia', 47, 0)
  aSport.addPoolResult('New Zealand', 'Canada', 33, 7)
  aSport.addPoolResult('Uganda', 'Sri Lanka', 33, 10)
  aSport.addPoolResult('Fiji', 'Wales', 21, 17)
  aSport.addPoolResult('Papua New Guinea', 'Malaysia', 31, 5)
  aSport.addPoolResult('South Africa', 'Scotland', 26, 5)

  // womens rugby sevens
  aSport = theTournament.findSport('Women\'s Rugby Sevens')
  aSport.addPoolResult('Canada', 'South Africa', 29, 0)
  aSport.addPoolResult('New Zealand', 'Kenya', 45, 0)
  aSport.addPoolResult('Fiji', 'England', 5, 17)
  aSport.addPoolResult('Australia', 'Wales', 34, 5)
  aSport.addPoolResult('Canada', 'Kenya', 24, 12)
  aSport.addPoolResult('New Zealand', 'South Africa', 41, 0)
  aSport.addPoolResult('Fiji', 'Wales', 29, 7)
  aSport.addPoolResult('Australia', 'England', 29, 12)
  aSport.addPoolResult('South Africa', 'Kenya', 10, 19)
  aSport.addPoolResult('New Zealand', 'Canada', 24, 7)
  aSport.addPoolResult('England', 'Wales', 45, 0)
  aSport.addPoolResult('Australia', 'Fiji', 17, 10)
}
