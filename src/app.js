//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon)
{
  var manager_details = [managerName, managerAge, currentTeam, trophiesWon];
  return manager_details;
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
var formation = [2, 3, 1];

//write your function here
function createFormation(formation)
{
  if (formation.length == 0)
    return null;
    let obj = {
      "defender": formation[0],
      "midfield": formation[1],
      "forward": formation[2]
    };
    return obj;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

/*
var players = [
{
    name: 'Ashley Young',
    age: 34,
    debut: 2011,
    team: 'Manchester Utd',
    position: 'Defender',
    country: 'England',
    awards: [
        {
            name: "Golden Foot",
            year: 2015
        }
    ]
} ,
....
*/

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year)
{
  var player_name = [];
    for(var i=0; i<players.length-1; i++)
    {
      for(var j=0; j< players[i].awards.length-1; j++)
      {
        if(players[i].awards[j].year != year)
          return [];
      else if(players[i].awards[j].year == year)
      {
        player_name.push(players[i]); 
      }  
      return player_name;
      }
    }
}
console.log(filterByDebut(2005));
//Progression 4 - Filter players that play at the position _______

function filterByPosition(position)
{
  var player_pos = [];
  for (var i=0; i<players.length; i++)
  {
    if (players[i].position == "")
      return [];
    else if (players[i].position == position)
    {
      player_pos.push(players[i]); 
    }
  }
  return player_pos;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName)
{
  var player_award = [];
    for(var i=0; i<players.length; i++)
    {
       for(var j=0; j< players[i].awards.length; j++)
       {
        if(players[i].awards[j].name == awardName)
        {
          player_award.push(players[i]); 
        }  
        
      }
    }
    return player_award;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes)
{
  var player_awards = [];
  var count = 0;
  var number_of_times = [];
  if(awardName == "" || noOfTimes == NaN)
    return [];

  for(var i=0; i<players.length; i++)
  {
    for(var j=0; j< players[i].awards.length; j++)
    {
      if(players[i].awards[j].name == awardName)
        count++;
    }
    number_of_times[i] = count;
    count =0;
  }
 
  for(var i=0; i<players.length; i++)
  {
    if(number_of_times[i] == noOfTimes)
    {
      player_awards.push(players[i]);
    }
  }
  return player_awards;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country)
{
  var player_country = [];
  

  for(var i=0; i<players.length; i++)
  {
    for(var j=0; j< players[i].awards.length; j++)
    {
      if(players[i].awards[j].name == awardName && players[i].country == country)
      {
          player_country.push(players[i]);
      }
    }
  }
  return player_country;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age)
{
  var player_update = [];

  for(var i=0; i<players.length; i++)
  {
    for(var j=0; j< players[i].awards.length; j++)
    {
      if(players[i].awards[j].name != null && players[i].team == team && players[i].age < age)
      {
          player_update.push(players[i]);
      }
    }
  }
  return player_update;
}

//Progression 9 - Sort players in descending order of their age

function SortByAge()
{
    for(var i=0; i<players.length; i++)
    {
      for(var j=0; j<players.length; j++)
      {
        if(players[j].age < players[j+1].age)
        {
          var temp = players[j];
          players[j] = players[j+1]; 
          players[j+1] = temp;
        }
      }
    }
    return players;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team)
{
  
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
