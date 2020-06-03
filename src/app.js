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
function createFormation(formation){
  if(!formation.length){
    return null;
  }
  let objectFormation = {
    defender : formation[0], 
    midfield : formation[1], 
    forward : formation[2]
  }
  return objectFormation;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  let playersList = [];
  for(let player of players){
    if(player.debut == year){
      playersList[playersList.length] = player;
    }
  }
return playersList;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  let playersList = [];
  for(let player of players){
    if(player.position == position){
      playersList[playersList.length] = player;
    }
  }
return playersList;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let playersList = [];
  for(let player of players){
    for(let info of player.awards){
      if(info.name == awardName){
        playersList[playersList.length] = player;
      }
    }
  }
return playersList;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  let playersList = [] ,count;
  for(let player of players){
    count = 0;
    for(let info of player.awards){
      if(info.name == awardName){
        count++; 
      }
    }
    if(count == noOfTimes){
      playersList[playersList.length] = player;
    }
  }
return playersList;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  let playersList = [];
  for(let player of players){
    for(let info of player.awards){
      if(info.name == awardName && player.country == country){
        playersList[playersList.length] = player;
      }
    }
  }
return playersList;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  let playersList = [];
  for(let player of players){
    if(player.awards.length >= noOfAwards && player.team == team && player.age < age){
      playersList[playersList.length] = player;
    }
  }
  return playersList;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  let [...players2] = players;
  let temporary;
  for(let i=0; i < players2.length ;i++){
    for(let j=0; j< players2.length-1 ; j++){
      if(players2[j].age < players2[j+1]){
        temporary = players2[j];
        players2[j] = players2[j+1];
        players2[j+1] = temporary;
      }
    }
  }
  return players2;
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  let playersList = [],temporary;
  for(let player in players){
    if(player.team == team){
      playersList[playersList.length]=player;
      for(let i = playersList.length-1 ;i > -1;i++){
        if(playersList[i].awards.length>player.awards.length){
          break;
        }
        temporary = players2[i];
        players2[i] = players2[i+1];
        players2[i+1] = temporary;
      }
    }
  }
  return playersList;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
