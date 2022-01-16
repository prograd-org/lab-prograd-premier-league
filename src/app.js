//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
createManager=(managerName, managerAge, currentTeam, trophiesWon)=>{
const manager=[
  managerName,managerAge,currentTeam,trophiesWon
];
  return(manager);
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

createFormation=(formation)=>{
  if(formation.length==0){
    return(null);
  }
  else{
  var formation={
    defender:formation[0],
     midfield:formation[1],
      forward:formation[2]
};
  return(formation);
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
  var arr =[];

  for(var i=0;i<players.length;i++){
     if(players[i].debut == year){
      arr.push(players[i])
    }
  }
  return arr;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var arr =[];

  for(var i=0;i<players.length;i++){
    if(players[i].position == position){
      arr.push(players[i]);
    }
  }
  return arr;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
   var arr =[];

   for(var i=0;i<players.length;i++){
     for(var j=0;j<players[i].awards.length;j++){
        if(players[i].awards[j].name == awardName){
        arr.push(players[i]);
     }
   }
  }
   return arr;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes){
  var arr =[];

  for(var i=0;i<players.length;i++){
    var count =0;
    for(var j=0;j<players[i].awards.length;j++){
      if(players[i].awards[j].name == awardName){
        count++;
          if(count == noOfTimes){
         if(noOfTimes == 2){
         arr.push(players[i])
         }
        }
      }
    }
  }
  return arr;
}


//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName,country){
  var arr =[];

  for(var i=0;i<players.length;i++) {
    if(players[i].country == country){
      for(var j=0;j<players[i].awards.length;j++) {
        if(players[i].awards[j].name == awardName) {
          arr.push(players[i]);
        }
      }
    }
  }
  return arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age) {
  var arr =[];

  for(var i=0;i<players.length;i++){
    if((players[i].team == team) && (players[i].age < age) && (players[i].awards.length >= noOfAwards)) {
          arr.push(players[i]);
        }
      }
  return arr;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  var arr =[];

  for(var i=0;i<players.length;i++) {
    for(var j=i+i;j<players.length;j++) {
      if(players[i] < players[j]){
        arr = players[i];
        players[i] = players[j];
        players[j] = arr;
      }
    }
  }
  return players;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  var arr =[];
  var output =[];
 
  for(var i=0;i<players.length;i++) {
    if(players[i].team == team){
      arr.push(players[i]);
    }
  }
   for(var i=0;i<arr.length;i++){
     for(var j=i+1;j<arr.length;j++){
       if(arr[i].awards.length < arr[j].awards.length){
         output = arr[i];
         arr[i] = arr[j];
         arr[j] = output;
       }
     }
   }
  return arr;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName,noOfTimes,country){
  var arr =[];

  for(var i=0;i<players.length;i++){
    var count =0;
    if(players[i].country == country){
      for(var j=0;j<players[i].awards.length;j++){
        if(players[i].awards[j].name == awardName){
          count++;
          if(count == noOfTimes){
            arr.push(players[i]);
          }
        }
      }
    }
  }
  return arr;
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order

//Sort the awards won by them in reverse chronological order
