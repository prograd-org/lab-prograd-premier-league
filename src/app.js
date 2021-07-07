//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;
function createManager(managerName,managerAge,currentTeam,trophiesWon){
   var managerDetails=new Array(managerName,managerAge,currentTeam,trophiesWon);
   return managerDetails;
}
//Write your function here

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
  for(var x=0;x<formation.length;x++){
    if(typeOf(formation[x])===undefined){
      return undefined;
    }
}
if(formation.length==0){
  return null;
}
}
createFormation(2,3,1);
createFormation(2,4,5);
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var yr=year;
  var playernames=new Array();
  for(var x=0;x<players.length;x++){
  if(yr==players[x].debut){
    playernames.push(players[x]);
  }
  return players[x];
}
if(playernames.length==0){
  return playernames;
  }
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var playerPositions=[];
  for(var x=0;x<players.length;x++){
    if(position==players[x].position){
      playerPositions.push(players[x]);
      return playernames;
    }
  }
}

//Progression 5 - Filter players that have won ______ award

//Progression 6 - Filter players that won ______ award ____ times

//Progression 7 - Filter players that won ______ award and belong to ______ country

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
