//Progression 1 - create a Manager array and return it


let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {

  let manager_ = [];

  manager_.push(managerName, managerAge, currentTeam, trophiesWon);
  return manager_;

}
createManager();

try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {

}


//Progression 2 - create a formation object and return 




//write your function here

function createFormation(skills) {
  if (skills.length == 0) {
    return null;
  }
  let object = {
    "defender": skills[0],
    "midfield": skills[1],
    "forward": skills[2]
  };
  return object;
}



// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {

}





//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let player = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].debut == year) {
      player.push(players[i]);
    }
  }
  return player;
}
filterByDebut();



//Progression 4 - Filter players that play at the position _______

function filterByPosition(positions) {
  let player_ = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].position == positions) {
      player_.push(players[i]);
    }
  }
  return player_;
}
filterByPosition();


//Progression 5 - Filter players that have won ______ award

function filterByAward(award) {
  let player__ = [];

  for (let i = 0; i < players.length; i++) {
    if (award == "FIFA FIFPro World XI")
      if (players[i].awards == award) {

        player__.push(players[i]);
      }
  }
  return player__;
}

filterByAward();




//Progression 6 - Filter players that won ______ award ____ times

//Progression 7 - Filter players that won ______ award and belong to ______ country

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order