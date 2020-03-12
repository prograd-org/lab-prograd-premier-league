//Progression 1 - create a Manager array and return it
//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;
function createManager(managerName,managerAge,currentTeam,trophiesWon)
{
  let manager=[];
  manager.push(managerName,managerAge,currentTeam,trophiesWon)
  return manager;
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

//write your function here

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
function filterByPosition(position)
{
  let pos=[];
  if(position=="null")
  return pos;
  else{
  for(let i=0;i<players.length;i++)
  {
    if(players[i].position==position)
    pos.push(players[i]);
  }
  return pos;
}
}


//Progression 5 - Filter players that have won ______ award
function filterByAward(awardname)
{
  let awr=[];
  if(awardname=="null")
  return awr;
  else{
  for(let i=0;i<players.length;i++)
  {
    for(let j=0;j<players[i].awards.length;j++)
    {
      if ((players[i].awards[j].name == awardName)) {
        if (!(awrd.includes(players[i])))
          awr.push(players[i]);
  }
  return pos;

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

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxTimes(awardName,country){
  var player = [];
    let count =0;
  
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

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
