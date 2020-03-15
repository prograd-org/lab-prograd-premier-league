//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;
//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var arr = []
  arr.push(managerName)
  arr.push(managerAge)
  arr.push(currentTeam)
  arr.push(trophiesWon)
  return arr;
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
function createFormation(list) {
  var result = {
    defender: 'undefined',
    midfield: 'undefined',
    forward: 'undefined'
  }
  if (list.length == 0)
    return null
  // for (let i = 0; i < list.length; i++) {
  //   result[key] = list[i];
  //   console.log(result);

  //}
  result.defender = list[0]
  result.midfield = list[1]
  result.forward = list[2]
  return result;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var result = []
  for (var i = 0; i < players.length; i++) {
    if (players[i].debut == year)
      result.push(players[i]);
  }
  return result;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(IpPosition) {
  var result = []
  for (var index = 0; index < players.length; index++) {
    if (players[index].position == IpPosition)
      result.push(players[index]);
  }
  return result;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(award) {
  if (award == null)
    return [];
  var result = [];
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j]['name'] == award)
        result.push(players[i]);
    }
  }
  return result;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  if (awardName == null)
    return []
  if ((filterByAward(awardName).length == noOfTimes)) return filterByAward(awardName)
  else
    return []
}



//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(award, coun) {
  if (award == null)
    return []
  var res = [],
    count = 0
  for (var index = 0; index < players.length; index++) {
    if ((players[index].awards.name == award) && (players[index].country == coun)) res.push(players[index])
  }
  return res
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noAwards, team, age) {
  if ((typeof (noAwards) == 'undefined') && (typeof (team) == 'undefined') && (typeof (age) == 'undefined')) return []
  else
    return []
}


//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order