
//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
let createManager =(managerName, managerAge, currentTeam, trophiesWon) => {
  let manager = [managerName,managerAge,currentTeam,trophiesWon];
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


//write your function here

createFormation=()=>{

  var formation = [2, 4, 3];

  //write your function here
  let createFormation = (formation) => {
    if(formation.length == 0){
    return null;
    }
    else{
      return { defender: formation[0], midfield: formation[1], forward: formation[2] };
    }
  
  }
    

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

filterByDebut = (year) =>{
  let arr = [];
  for(var i=0; i<players.length;i++)
  {
    if(players[i].debut == year){
      arr.push(players[i]);
    }
  }
  return arr;
}


//Progression 4 - Filter players that play at the position _______

filterByPosition = (position) =>{
  let arr = [];
  for(var i=0; i<players.length;i++)
  {
    if(players[i].position == position){
      arr.push(players[i]);
    }
  }
  return arr;
}

//Progression 5 - Filter players that have won ______ award

filterByAward = (awardName) =>
{
  let arr1 = [];
  for (let i = 0; i < players.length; i++)
   {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        arr1 .push(players[i]);
      }
    }
  }
  return arr1;
}


//Progression 6 - Filter players that won ______ award ____ times
filterByAwardxTimes = (awardName, noOfTimes) =>{
  let arr=[];
  for( let i=0;i<players.length;i++){
    let count = 0;
      for(let j=0;j<players[i].awards.length;j++){
        if(players[i].awards[j].name ==awardName){
         count++;
        }
      }  
        if(count==noOfTimes)
        arr.push(players[i]);
    }  
    return arr ;
}



//Progression 7 - Filter players that won ______ award and belong to ______ country
filterByAwardxCountry = (awardName, country) => {
  let arr = [];
    for (let i = 0; i < players.length; i++) 
    {
      for (let j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName && players[i].country == country) {
          arr.push(players[i])
        }
      }
    }
    return arr;
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



players.age.sort()
players.reverse();



//Progression 10 - Sort players beloging to _____ team in descending order of awards won



//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
}