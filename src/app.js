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
  if (formation.length == 0) {
    return null
  } else {
    return {
      "defender": formation[0],
      "midfield": formation[1],
      "forward": formation[2]
    }
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
  var playerDebutYear = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].debut == year) {
      playerDebutYear.push(players[i]);
    }
  }
  return playerDebutYear;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  var playerPosition = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].position == position) {
      playerPosition.push(players[i])
    }
  }
  return playerPosition;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  var playerAward = [];
  if (awardName === "") {
    return playerAward
  } else {
    for (var i = 0; i < players.length; i++) {
      for (var j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName) {
          playerAward.push(players[i])
        }
      }
    }

  }
  return playerAward
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  var playerAwardTimes = []
  var count = 0
  for (var i = 0; i < players.length; i++) {
    count = 0
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        count++;
      }
    }
    if (count == noOfTimes) {
      playerAwardTimes.push(players[i])
    }
  }
  return playerAwardTimes
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  var playerAwardCountry = []
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName && players[i].country == country) {
        playerAwardCountry.push(players[i])
        break
      }
    }
  }
  return playerAwardCountry
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var playerAwardTeamAge = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].awards.length >= noOfAwards && players[i].team == team && players[i].age < age) {
      playerAwardTeamAge.push(players[i]);
    }
  }
  return playerAwardTeamAge;
}

//Progression 9 - Sort players in descending order of their age
function sortByAge() {
  for (let i = 0; i < players.length; i++) {
    players[i].age.sort(function (a, b) {
      return b - a
    })
  }
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  var playerSortAward = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].team == team) {
      playerSortAward.push(players[i]);
    }
  }
  return playerSortAward.awards.length.sort();
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order