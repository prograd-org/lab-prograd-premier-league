//Progression 1 - create a Manager array and return it
let managerName = "Harish kumar";
let managerAge = 48;
let currentTeam = "Manchester FC";
let trophiesWon = 60;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon)
{
  let manager = [];
  manager.push(managerName, managerAge, currentTeam, trophiesWon
  );
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
function createFormation(array)
{
  if (array.length == 0) {
    return null;
  }
  let object = {
    "defender": array[0], "midfield": array[1], "forward": array[2]
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
function filterByDebut(year)
{
  let playyr = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].debut == year) {
      playyr.push(players[i]);
    }
  }
  return playyr;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition()
{
  return pos = [];
}
function filterByPosition(position)
{
  let pos = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].position == position) {
      pos.push(players[i]);
    }
  }
  return pos;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName)
{
  let awrd = [];
  for (var i = 0; i < players.length; i++)
    for (var j = 0; j < players[i].awards.length; j++)
      if ((players[i].awards[j].name == awardName)) {
        if (!(awrd.includes(players[i])))
          awrd.push(players[i]);
      }

  return awrd;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes()
{ let plyr = [];
  return plyr }

function filterByAwardxTimes(awardName, noOfTimes)
{
  
  var player = [];
  let count =0;
 
  players.forEach(function (item) {
    item.awards.forEach(function (item, index, arr) {
     
      if(item.name == awardName){
       
        count++;
      }
    });
    if(count == noOfTimes){
      player.push(item);
    }
    
    
  });

  return player;
}


//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxTimes(awardName,country){
var player = [];
  let count =0;
  // let noOfTimes = 3;
  players.forEach(function (item) {
    item.awards.forEach(function (item) {
      
      if(item.name == awardName){
         
        count++;
      }
    });
    if(item.country == country && count>=1){
      player.push(item);
    }
    
  });
  return player;
}




//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var player = [];
  let count =0;
  
  players.forEach(function (item) {
    item.awards.forEach(function (item) {
      if(item.length == noOfAwards){
        count++;
      }
    });
    if(item.team == team && item.age < age){
      if(count >=1){
      player.push(item);
    }
  }
  });
  return player;
}

