//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  Array1 = [managerName, managerAge, currentTeam, trophiesWon];
  return Array1
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
function createFormation(arr2) {
  if (arr2.length == 0) {
    return null
  }
  var objFormation = {
    defender: arr2[0],
    midfield: arr2[1],
    forward: arr2[2]
  }
  return objFormation;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var playersList = [];
  var k = 0;
  for (let x of players) {
    if (x.debut == year) {
      playersList[k++] = x; //x is one of the desired player 
    }
  }
  return playersList;
}


//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var playersList = [];
  var k = 0;
  for (let x of players) {
    if (x.position == position) {
      playersList[k++] = x; //x is one of the desired player 
    }
  }
  return playersList;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(award) {
  var playersList = [];
  if (!award) {
    return playersList;
  }

  var k = 0;
  for (let x of players) {
    for (let info of x.awards)
      if (info.name == award) {
        playersList[k++] = x; //x is one of the desired player 
      }
  }
  return playersList;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  var playersList = [];
  var k = 0;
  for (let x of players) {
    var count = 0;
    for (let info of x.awards)
      if (info.name == awardName) {
        count++
      }
    if (count == noOfTimes) {
      playersList[k++] = x; //x is one of the desired player 
    }
  }

  return playersList;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var playersList = [];
  var k = 0;
  for (let x of players) {
    for (let info of x.awards)
      if (info.name == awardName && x.country == country) {
        playersList[k++] = x; //x is one of the desired player 
      }
  }
  return playersList;

}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var playersList = [];
  var k = 0;
  for (let x of players) {
    if (x.awards.length >= noOfAwards && x.team == team && x.age < age) {
      playersList[k++] = x;

    }
  }
  return playersList;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  var playersList = [];

  playersList = Object.age(players).sort()
  return playersList.reverse();
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  var playersList = [];
  var sortedPlayers = [];
  var k = 0;
  for (let x of players) {
    if (x.team == team) {
      playersList[k++] = x;

    }
  }
  sortedPlayers = playersList.awards.length.sort()
  return sortedPlayers.reverse();
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order