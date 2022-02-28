//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
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
function createFormation(arr){
  return (arr.length===0)?null:{"defender":arr[0],"midfield":arr[1],"forward":arr[2]};
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  return players.filter((player)=>
       player.debut==year
  )
   
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  return  players.filter((player)=>
  player.position==position)
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(award){
  var result=[]
  if(award===undefined)
  return result 
  for(let index=0;index<players.length;index++){
    for(let index1=0;index1<players[index].awards.length;index1++){
      if(players[index].awards[index1].name===award){
        result.push(players[index])
        break;
      }
    }
  }
  return result;

}

//Progressifon 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes){
  var plalst=[];


for(var i=0;i<players.length;i++){
  var count=0;
  for(var j=0;j<players[i].awards.length;j++){
    if(players[i].awards[j].name===awardName){
     count++;
    }
    }
    if(count===noOfTimes)  
     plalst.push(players[i]);
  }
  return plalst;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  var plalst=[];
  
  
  for(var i=0;i<players.length;i++){
    
    for(var j=0;j<players[i].awards.length;j++){
      if(players[i].awards[j].name===awardName && players[i].country===country){
        plalst.push(players[i]);
      }
      }
      }
    return plalst;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var plalst=[];
  for(var i=0;i<players.length;i++){
    if(players[i].awards.length>=noOfAwards && players[i].team===team && players[i].age<age)
    plalst.push(players[i]);}
    return plalst;
}
//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order