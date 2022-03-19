//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  var managerDetails=[]
  managerDetails.push(managerName)
  managerDetails.push(managerAge)
  managerDetails.push(currentTeam)
  managerDetails.push(trophiesWon)
  return managerDetails
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
    if(formation.length===0)
    return null
    var result={}
    result.defender=formation[0]
    result.midfield=formation[1]
    result.forward=formation[2]
    return result
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
 
  var result=players.filter((player)=>
       player.debut==year
  )
  return result
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
     var result=[]
     if(position===undefined)
     return result
     result=players.filter((player)=>player.position===position)
     return result

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

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxCountry(award,country){
  var result=[]
  
for(let index=0;index<players.length;index++){
  if(players[index].country===country){
    for(let index1=0;index1<players[index].awards.length;index1++){
      if(players[index].awards[index1].name===award){
        result.push(players[index])
        break;
      }
    }
  }
}

  return result;
}

function filterByAwardxTimes(award,count){
  var result=[]
  if(award===undefined)
  return result 
  for(let index=0;index<players.length;index++){
    let countOfAwards=0
    for(let index1=0;index1<players[index].awards.length;index1++){
      if(players[index].awards[index1].name===award)
      countOfAwards++;
       
     
  
    }
    if(countOfAwards===count)
    result.push(players[index])
  }
  return result;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age){
  var result=[]
 
  for(let index=0;index<players.length;index++){
     if(players[index].awards.length>=noOfAwards && players[index].team===team && players[index].age<age)
     result.push(players[index])
      
       
     
  
    
    
  }
  return result;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order