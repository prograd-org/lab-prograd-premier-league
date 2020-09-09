//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var managerDetails = [managerName, managerAge, currentTeam, trophiesWon];
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
function createFormation(playerscount) {
  if (playerscount.every(item => item === 0))
    return null;
  else
    var object = {
      defender: playerscount[0],
      midfield: playerscount[1],
      forward: playerscount[2]
    };
  return object;
}



// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  var debutyearplayers = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].debut == year)
      debutyearplayers.push(players[i]);
  }

  return debutyearplayers;

}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var postionplayers = [];
  var count = 0;

  if (position != 'Midfielder' || position != 'Forward' || position != 'Defender')
    return positionplayers;
  else
    for (let i = 0; i < players.length; i++) {
      if (players[i].position == position) {
        positionplayers.push(players[i]);
        count++;
      }
    }
  return positionplayers, count;
}



//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  var awardplayers = [];

  for (let i = 0; i < players.length; i++) {
    if (players[i].position == position)
      awardplayers.push(players[i]);
  }
  return awardplayers;


}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  var players = [];
  var count = 0;

  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName)
        count++;
    }
    if (count == noOfTimes)
      players.push(players[i]);
  }
  return player;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var countryplayer = [];
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName && players[i].country == country) {
        countryplayer.push(players[i])
      }
    }
  }
  return countryplayer;
}


//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {

}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order