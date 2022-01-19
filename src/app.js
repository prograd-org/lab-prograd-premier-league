//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  let manager=[managerName, managerAge, currentTeam, trophiesWon];
  return manager;
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
  if(formation.length == 0){
    return null;
  }
  var play = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return play;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var data= players.filter(player => player.debut == year);
  return data ;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var pos=players.filter( player => player.position == position)
  return pos;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  var array = [];

  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        array.push(players[i]);
      }
    }
  }

  return array;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  var array = [];
  var count=0;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        count++
      }
    }
    if(count===noOfTimes){
      array.push(players[i]);
    }
    count=0;
  }
  return array;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  var array=[];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++){
      if ((players[i].awards[j].name === awardName) && (players[i].country === country)){
        array.push(players[i])
      }
    }
  }
  console.log(array);
  return array;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var array=[];
  for(let i=0;i<players.length;i++){
    if((players[i].awards.length>=noOfAwards) && players[i].team === team && players[i].age<age){
      array.push(players[i]);
    }
  }
  return array;
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
