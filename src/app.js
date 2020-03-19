//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var manager_detail = [managerName, managerAge, currentTeam, trophiesWon];
  return manager_detail;
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
function createFormation(formation)
{
  var formation_obj ={
                      defender : formation[0],
                      midfield : formation[1],
                      forward  : formation[2]
                      
  }
  return formation_obj;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var player_debut = [];
  for (let i=0; i < players.length ; i++)
  {
    if(players[i] == year)
    {
      player_debut.push(players[i]);
    }
  }
  return player_debut;
  }

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var player_pos = [];
  for (let i =0; i<players.length; i++){
    if (players[i].position == position) {
      player_pos.push(players[i]);
    }
  }
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  var player_award =[];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        player_award.push(players[i]);
        
      }
    }
    
  }
  return player_award;
}
//Progression 6 - Filter players that won ______ award ____ times

  function filterByAwardxTimes(awardName, noOfTimes) {
    let arr = [];
    let count = 0;
    for (let i = 0; i < players.length; i++)
      {
        for (let j = 0; j < players[i].awards.length; j++) 
        {
          if (players[i].awards[j].name == awardName)
           {
              count++;       
          }
        }
      if (count == noOfTimes)
      {
        arr.push(players[i]);
      }
      count = 0;
    }
    return arr;
  }


//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let arr = [];
  let c = 0;
  for (let i = 0; i < players.length; i++) 
  {
    if (players[i].country == country) 
    {
      for (let j = 0; j < players[i].awards.length; j++) 
      {
        if (players[i].awards[j].name == awardName)
         {
          arr[c++] = players[i];
        }
      }
    }
  }
  return arr;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(no,team,age){
  var player_arr= [];
  
  for(let i=0;i < players.length;i++)
  {
      if((players[i].awards.length>=no) &&(players[i].team == team) && (players[i].age < age))
      {
        player_arr.push(players[i]);
      }
      
  }
  return player_arr;

}

//Progression 9 - Sort players in descending order of their age
function SortByAge()
{
  var aw = [];
  players.sort(function(a, b){return b.age - a.age});
  for(i=0;i<players.length; i++)
  {aw[i]=players[i]["name"]}
  return aw;
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team)
{
  var aw = [], tm=[], j=0;
  for(i=0;i<players.length; i++){
    if(players[i]["team"]==team){
      tm[j] = players[i];
      j++;
    }}
  tm.sort(function(a, b){return b.awards.length - a.awards.length});
  for(i=0;i<tm.length; i++)
  {aw[i]=tm[i]["name"]}
  return aw;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country)
{
  var arr = [], j=0,i, k;
  for(i=0;i<players.length; i++)
  {var award = 0;
    for(k=0; k<players[i]["awards"].length; k++)
    { 
    if(awardName==players[i]["awards"][k]["name"])
    { 
      award++;
    }
  }
   if(noOfTimes==award && players[i]["country"]==country)
   {
     arr[j] = players[i]["name"];
     j++;
   }
    }
  return arr.sort();
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
