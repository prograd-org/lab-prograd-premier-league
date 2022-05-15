//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

let createManager = (managerName, managerAge, currentTeam, trophiesWon) => {
  var details=[managerName, managerAge, currentTeam, trophiesWon];
  return details;
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
let createFormation = (formation) => {
  if(formation.length==0){return null;}
  var form = {defender:formation[0], midfield:formation[1], forward:formation[2]};
  return form;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}



//Progression 3 - Filter players that debuted in ___ year
let filterByDebut = (year) => {
  var data=[],j=0;
  for(var i=0;i<players.length;i++)
  {
    if(year==players[i].debut)
    {
      data[j]=players[i];
      j++;
    }
  }
  return data;
}



//Progression 4 - Filter players that play at the position _______

let filterByPosition = (position) => {
  var a=[],j=0;
  for(var i=0;i<players.length;i++)
  {
    if(position==players[i].position)
    {
      a[j]=players[i];
      j++;
    }
  }
  return a;
}

//Progression 5 - Filter players that have won ______ award

let filterByAward = (awardName) => {
  var a=[],k=0;
  for(var i=0;i<players.length;i++)
  {
    for(var j=0;j<players[i].awards.length;j++)
    {
     if(awardName==players[i].awards[j].name)
     {
      a[k]=players[i];
      k++;
     }
    }
  }
  return a;
}

//Progression 6 - Filter players that won ______ award ____ times
let filterByAwardxTimes = (awardName, noOfTimes) => {
  var a=[],k=0;
  for(var i=0;i<players.length;i++)
  {
    var c=0;
    for(var j=0;j<players[i].awards.length;j++)
    {
     if(awardName==players[i].awards[j].name)
     {
      c++;
     }
    }
    if(noOfTimes==c)
     {
      a[k]=players[i];
      k++;
     }
  }
  return a;
}


//Progression 7 - Filter players that won ______ award and belong to ______ country

let filterByAwardxCountry = (awardName, country) => {
  var a=[],k=0;
  for(var i=0;i<players.length;i++)
  {
    for(var j=0;j<players[i].awards.length;j++)
    {
     if(awardName==players[i].awards[j].name && country==players[i].country)
     {
      a[k]=players[i];
      k++;
     }
    }
  }
  return a;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

filterByNoOfAwardsxTeamxAge = (noOfAwards, team, age) =>{
  var arr = [];
  for (var i= 0; i < players.length; i++) {
    if (players[i].awards.length >= noOfAwards && players[i].team == team && players[i].age < age) {
      arr.push(players[i])
    }
  }
  return arr;
}

//Progression 9 - Sort players in descending order of their age



//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
