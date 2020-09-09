//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  let arr = [];
  arr.push(managerName, managerAge, currentTeam, trophiesWon);
  return arr;
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
function createFormation(arr) {
  if (arr.length == 0)
    return null;
  let object = {
    defender: arr[0],
    midfield: arr[1],
    forward: arr[2]
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
function filterByDebut(year) {
  let arr = players.filter((player) => {
    return player.debut === year;
  });

  return arr;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let arr = players.filter((player) => {
    return player.position === position;
  });

  return arr;
}


//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let arr = players.filter((player) => {
    let allAwardsNames = player.awards.map((awards) => awards.name);
    // ['a1','a2','a3']
    return allAwardsNames.includes(awardName);
  });
  return arr;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let arr = [];
  for (var i = 0; i < players.length; i++) {
      var count = 0;
      for (var j = 0; j < players[i].awards.length; j++)
          if (players[i].awards[j].name == awardName)
              count++;
      if (count == noOfTimes)
          arr.push(players[i]);
  }
  return arr;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let arr = [];
  for (var i = 0; i < players.length; i++)
    for (var j = 0; j < players[i].awards.length; j++)
      if ((players[i].awards[j].name == awardName) && (players[i].country == country))
        if (!(arr.includes(players[i])))
          arr.push(players[i]);


  return arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  let arr = [];
  for (var i = 0; i < players.length; i++) {
      var count = 0;
      if ((players[i].awards.length >= noOfAwards) && (players[i].team == team) && (players[i].age == age))
          arr.push(players[i]);
       
  }
  return arr;


}
//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  for(var j=0;j<players.length-1-i;j++) {
      var l=players[j].compareTo(players[j+1]);
      if(l!=-1){
        let temp=players[j];
        players[j]=players[j+1];
        players[j+1]=temp;
      }
    }
    return players;
  }
  
  

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
