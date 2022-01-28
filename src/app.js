//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var managerDetails = [managerName, managerAge, currentTeam, trophiesWon]
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

function createFormation(formation) {
  if (formation.length === 0) {
    return null;
  } else {
    var formation = {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2]
    };
    return formation;
  }
}

// Dont edit the following codesrc/app.js
try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  var filteredPlayers = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].debut === year) {
      filteredPlayers.push(players[i]);
    }
  }
  return filteredPlayers;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  var filteredPositon = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].position === position) {
      filteredPositon.push(players[i]);
    }
  }
  return filteredPositon;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  var filteredAwardPlayers = [];
  if (awardName === "") {
    return filteredAwardPlayers;
  } else {
    for (let i = 0; i < players.length; i++) {
      players[i].awards.forEach(element => {
        if (element.name === awardName) {
          filteredAwardPlayers.push(players[i]);
        }
      });
    }
  }
  return filteredAwardPlayers;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  var filtered = [];
  var count = 0;
  for (let i = 0; i < players.length; i++) {
    count = 0;
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        count++;
      }
    }
    if (noOfTimes === count) {
      filtered.push(players[i]);
    }
  }
  console.log(filtered)
  return filtered;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByAwardxCountry(awardName, country) {
  var filtered = [];
  var count = 0;
  for (let i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName && players[i].country == country) {
        filtered.push(players[i]);
        break;
      }
    }
  }
  return filtered;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var filtered = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].awards.length >= noOfAwards && players[i].team == team && players[i].age < age) {
      filtered.push(players[i]);
    }
  }
  return filtered;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  var filtered = [];

}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  var filtered = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].team == team) {
      filtered.push(players[i]);
    }
  }
  console.log(filtered.awards.length.sort());
  return filtered.awards.length.sort();
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
