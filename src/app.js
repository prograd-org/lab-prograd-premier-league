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
  if(!formation.length){//returning null for empty array
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
    if(player.debut == year){ //if parameter matches debut year then add player to list
      playersList[playersList.length] = player;
    }
  }
return playersList; //return filtered list
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  let playersList = [];
  for(let player of players){
    if(player.position == position){ //filtering players according to position
      playersList[playersList.length] = player;
    }
  }
return playersList; //returning filtered list
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let playersList = [];
  for(let player of players){ //iterating through players data
    for(let info of player.awards){//iterating through awards of an player
      if(info.name == awardName){ //filtering according to parameter award name
        playersList[playersList.length] = player;
      }
    }
  }
return playersList; //returning filtered list
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  let playersList = [] ,count;
  for(let player of players){
    count = 0;
    for(let info of player.awards){ //iterating through players data
      if(info.name == awardName){ //counting number of times specific award is taken
        count++; 
      }
    }
    if(count == noOfTimes){ //filtering according to no. of awards
      playersList[playersList.length] = player;
    }
  }
return playersList; //returning filtered playlist
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  let playersList = [];
  for(let player of players){//iterating through player's data 
    for(let info of player.awards){//iterating though awards of an player
      if(info.name == awardName && player.country == country){
        playersList[playersList.length] = player; //filtering according to country and award
      }
    }
  }
return playersList;//returning filtered list
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  let playersList = [];
  for(let player of players){ //iterating through player's data
    if(player.awards.length >= noOfAwards && player.team == team && player.age < age){ 
      playersList[playersList.length] = player; // filtering based on #awards , team and age
    }
  }
  return playersList; //returning filtered list
}
//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  let [...players2] = players; //copying the data
  let temporary; //variable used for swapping purpose
  for(let i=0; i < players2.length ;i++){
    for(let j=0; j< players2.length-1 ; j++){ //applying bubble sort
      if(players2[j].age < players2[j+1]){ //condition for sorting in descending order
        temporary = players2[j];
        players2[j] = players2[j+1]; //swapping 2 elements
        players2[j+1] = temporary;
      }
    }
  }
  return players2; //returning sorted list
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  let playersList = [],temporary;
  for(let player in players){
    if(player.team == team){ //finding player belonging to team
      playersList[playersList.length]=player;
      for(let i = playersList.length-1 ;i > -1;i--){ // applying insertion sort
        if(playersList[i].awards.length > player.awards.length){ //condition to sort in descending order
          break;
        }
        temporary = players2[i];
        players2[i] = players2[i+1]; //swapping elements
        players2[i+1] = temporary;
      }
    }
  }
  return playersList;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
  
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  //creating empty list
  let playersList = [] , temporary;//variable used for swapping purpose
  let count = 0 ;//keeping count for awards
  //iterate over player's data to find out the player satifying parameters
  for(let player of players){
    //resetting award count for every player
    for(let info of player.awards){
      if(info.name == awardName){
        //if awardname matches parameter then increment awardcount
        count++;
      }
    }
    if(count == noOfTimes && player.country == country){
      //use insertion sort to add that player to the list
      playersList[playersList.length] = player ; 
      for(let i=playersList.length-1 ; i>-1 ; i--){
        if(player.name > playersList[i].name){
          break; //stop when it occupies it's correct position
        }
        //otherwise swap two elements
        temporary = playersList[i];
        playersList[i] = player;
        player = temporary ; 
      }
    }
  }
  return playersList;
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  //create empty list
  let playersList = [];
  //iterate through plyer's data
  for(let player of players){
    if(player.age > age){
      //if player is older than parameter the add to list and then use insertion sort
      playersList[playersList.length] = player ; 
      for(let i=playersList.length-1 ; i>-1 ; i--){
        if(player.name > playersList[i].name){
          break; //stop when it occupies it's correct position
        }
        //otherwise swap two elements
        temporary = playersList[i];
        playersList[i] = player;
        player = temporary ; 
      }
    }
  }
return playersList ;
}