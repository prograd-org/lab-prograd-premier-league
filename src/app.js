//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
let createManager = (managerName, managerAge, currentTeam, trophiesWon) => {
  let arr = [managerName, managerAge, currentTeam, trophiesWon];
  return arr;
};

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
  let formationObject = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
  return formation.length == 0 ? null : formationObject;
};

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
let filterByDebut = (year) => {
  return players.filter((players) => players.debut == year);
};

//Progression 4 - Filter players that play at the position _______
let filterByPosition = (position) => {
  return players.filter((players) => players.position == position);
};

//Progression 5 - Filter players that have won ______ award
let filterByAward = (awardName) => {
  if (typeof awardName == "undefined") {
    return [];
  } else {
    let res = [];
    players.map((player) => {
      player.awards.filter((award) => {
        if (award.name == awardName) {
          res.push(Object.assign({}, player));
        }
      });
    });
    return res;
  }
};

//Progression 6 - Filter players that won ______ award ____ times
let filterByAwardxTimes = (awardName, noOfTimes) => {
  if (typeof awardName == "undefined" || typeof noOfTimes == "undefined") {
    return [];
  } else {
    let res = [];
    players.map((player) => {
      let count = 0;
      player.awards.map((award) => {
        if (award.name == awardName) {
          count++;
        }
      });
      if (count == noOfTimes) {
        res.push(Object.assign({}, player));
      }
    });
    return res;
  }
};

//Progression 7 - Filter players that won ______ award and belong to ______ country
let filterByAwardxCountry = (awardName, country) => {
  if (typeof awardName == "undefined" || typeof country == "undefined") {
    return [];
  } else {
    let res = [];
    players.map((player) => {
      player.awards.filter((award) => {
        if (award.name == awardName && player.country == country) {
          res.push(Object.assign({}, player));
        }
      });
    });
    return res;
  }
};

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
let filterByNoOfAwardsxTeamxAge = (noOfAwards, team, age) => {
  if (
    typeof noOfAwards == "undefined" ||
    typeof team == "undefined" ||
    typeof age == "undefined"
  ) {
    return [];
  } else {
    let res = [];
    players.map((player) => {
      if (
        player.awards.length >= noOfAwards &&
        player.age <= age &&
        player.team == team
      ) {
        res.push(Object.assign({}, player));
      }
    });
    return res;
  }
};

//Progression 9 - Sort players in descending order of their age
let SortByAge = () => {
  let temp = players;
  temp.sort((a, b) => (a.age > b.age ? -1 : 1));
  return temp;
};

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order