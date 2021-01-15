//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  ]
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

function createFormation(array) {
  if (array.length == 0)
    return null

  let object = {
    defender: array[0],
    midfield: array[1],
    forward: array[2]
  };
  return object
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  return players.filter((data) => {
    if (data.debut == year)
      return data
  })
}

//Progression 4 - Filter players that play at the position _______


function filterByPosition(position) {
  return players.filter((data) => {
    if (data.position == position)
      return data
  })
}


//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  return players.filter(
    player => player.awards.some(
      award => award.name === awardName));
}

//Progression 6 - Filter players that won ______ award ____ times


function filterByAwardxTimes(awardName, count) {
  array = []
  for (let i = 0; i < players.length; i++) {
    let flag = count
    for (let j = 0; j < players[i].awards.length; j++)
      if (players[i].awards[j].name === awardName)
        if (flag-- == 1)
          array.push(players[i])
  }
  return array
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  array = []
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++)
      if (players[i].awards[j].name === awardName && players[i].country == country)
        array.push(players[i])
  }
  return array
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(awardCount, teamName, age) {
  array = []
  for (let i = 0; i < players.length; i++) {
    if (players[i].awards.length >= awardCount && players[i].team == teamName && players[i].age < age)
      array.push(players[i])
  }
  return array
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order