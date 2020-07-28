//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  let managerDetails = [managerName, managerAge, currentTeam, trophiesWon];
  return managerDetails;
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
function createFormation(formationArray) {
  if (formationArray == "") {
    return null;
  }
  let formationDetails = {
    'defender': formationArray[0],
    'midfield': formationArray[1],
    'forward': formationArray[2]
  }
  return formationDetails;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  var playerList = [];
  let c = 0;
  for (let i of players) {
    if (i.debut == year) {
      playerList[c++] = i;
    }
  }
  return playerList;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(pos) {
  var playerList = [];
  let c = 0;
  for (let i of players) {
    if (i.position == pos) {
      playerList[c++] = i;
    }
  }
  return playerList;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  var playerList = [];
  let c = 0;
  for (let i of players) {
    for (let j = 0; j < i.awards.length; j++) {
      if (i.awards[j].name == awardName) {
        playerList[c++] = i;
        break;
      }
    }
  }
  return playerList;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  var playerList = [];
  let c = 0;
  let count = 0;
  for (let i of players) {
    count = 0;
    for (let j = 0; j < i.awards.length; j++) {
      if (i.awards[j].name == awardName) {
        count++;
      }
    }
    if (noOfTimes == count) {
      playerList[c++] = i;
    }
  }
  return playerList;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, cntry) {
  var playerList = [];
  let c = 0;
  for (let i of players) {
    for (let j = 0; j < i.awards.length; j++) {
      if (i.awards[j].name == awardName && i.country == cntry) {
        playerList[c++] = i;
        break;
      }
    }
  }
  return playerList;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var playerList = [];
  let c = 0;
  for (let i of players) {
    if (i.awards.length >= noOfAwards && i.team == team && i.age < age) {
      playerList[c++] = i;
    }
  }
  return playerList;
}

//Progression 9 - Sort players in descending order of their age

function SortByAge() {
  var playerList = [];
  playersList = Object.age(players).sort()
  return playersList.reverse();
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team) {
  var playerList = [];
  let c = 0;
  for (let i of players) {
    if (i.team == team) {
      playerList[c++] = i;
    }
  }
  playersList = playerList.awards.length.sort();
  return playersList;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ 
//country in alphabetical order of their names

function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var playerList = [];
  let c = 0;
  let count = 0;
  for (let i of players) {
    count = 0;
    for (let j = 0; j < i.awards.length; j++) {
      if (i.awards[j].name == awardName) {
        count++;
      }
    }
    if (noOfTimes == count && i.country == country) {
      playerList[c++] = i;
    }
  }
  return playerList.name.sort();
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age) {
  var playerList = [];
  let c = 0;
  for (let i of players) {
    if (i.age >= age) {
      i.awards.name.sort().reverse();
      playerList[c++] = i;
    }
  }

  return playerList.age.sort();
}