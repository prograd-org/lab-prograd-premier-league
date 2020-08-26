//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon]
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (!formation.length) {
    return null
  }
  return {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let choosenPlayers = []
  for (const player of players) {
    if (player.debut == year) {
      choosenPlayers.push(player)
    }
  }
  return choosenPlayers
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let choosenPlayers = []
  for (const player of players) {
    if (player.position == position) {
      choosenPlayers.push(player)
    }
  }
  return choosenPlayers

}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let choosenPlayers = []
  for (const player of players) {
    for (const award of player.awards) {
      if (award.name == awardName) {
        choosenPlayers.push(player)
        break;
      }
    }
  }
  return choosenPlayers
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let choosenPlayers = []
  for (const player of players) {
    let count = 0
    for (const award of player.awards) {
      if (award.name == awardName) {
        count++
      }
    }
    if (count == noOfTimes) {
      choosenPlayers.push(player)
    }
  }

  return choosenPlayers
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let choosenPlayers = []
  for (const player of players) {
    let countryFlag = false
    let awardNameFlag = false
    for (const award of player.awards) {
      if (award.name == awardName) {
        awardNameFlag = true
      }
    }
    if (player.country == country) {
      countryFlag = true
    }

    if (countryFlag && awardNameFlag) {
      choosenPlayers.push(player)
    }
  }
  return choosenPlayers
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let choosenPlayers = []
  for (const player of players) {
    if (player.team == team && player.age <= age && player.awards.length >= noOfAwards) {
      choosenPlayers.push(player)
    }
  }
  return choosenPlayers
}
//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  let players1 = [...players]

  players1.sort((p1, p2) => {
    if (p1.age > p2.age) {
      return -1
    } else {
      return 1
    }
  })

  return players1
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards() {
  let players1 = players.slice()

  players1.sort((p1, p2) => {
    console.log(p1)
    console.log(p2)

    if (p1.awards.length > p2.awards.length) {
      return -1
    } else {
      return 1
    }
  })
  return players1
}


//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  let choosenPlayers = []
  for (const player of players) {
    if (player.country == country) {
      let count = 0
      for (const award of player.awards) {
        if (awardName = award.name) {
          count++
        }
      }

      if (count) {
        choosenPlayers.push(player)
      }
    }
  }
  return choosenPlayers.sort((p1, p2) => {
    if (p1.name.toUpperCase() > p2.name.toUpperCase()) {
      return 1
    } else {
      return -1
    }
  })
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age) {
  let choosenPlayers = []
  for (const player of players) {
    if (player.age >= age) {
      let sortedAwards = player.awards
      sortedAwards.sort((award1, award2) => {
        if (award1.year > award2.year) {
          return -1
        } else {
          return 1
        }
      })

      player.awards = sortedAwards
      choosenPlayers.push(player)
    }
  }

  choosenPlayers.sort((p1, p2) => {
    if (p1.name > p2.name) {
      return 1
    } else {
      return -1
    }
  })

  return choosenPlayers
}