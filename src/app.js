//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  return [managerName, managerAge, currentTeam, trophiesWon];
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

function createFormation(inp){
  if(inp.length === 0){
    return null;
  }
  return {
    defender: inp[0],
    midfield: inp[1],
    forward: inp[2]
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year){
  var result = [];
  players.forEach(element => {
    if(element.debut == year){
      result.push(element);
    }
  });
  return result;
}


//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  var result = [];

  players.forEach(element => {
    if(element.position == position){
      result.push(element);
    }
  });

  return result;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awards){
  var result = [];
  players.forEach(element => {
    element.awards.forEach(elem => {
      if(elem.name == awards){
        result.push(element);
      }
    });
  });
  return result;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(award, times){
  var result = [];
  players.forEach(element => {
    var count = 0;
    for (var i = 0; i < element.awards.length; i++) {
      if(element.awards[i].name == award){
        count++;
        if(count == times){
          result.push(element);
          break;
        }
      }
    }
  });
  return result;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(award, country) {
  var result = [];
  players.forEach(element => {
    if(element.country == country){
      element.awards.forEach(elem => {
        if(elem.name == award){
          result.push(element)
        }
      });
    }
  });

  return result;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(awards, team, age){
  var result = []
  players.forEach(element => {
    if(element.awards.length >= awards && element.team == team && element.age <= age) {
      result.push(element);
    }
  });
  return result;
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
