//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;
function createManager( managerName, managerAge, currentTeam, trophiesWon)
{
var manager = [managerName, managerAge, currentTeam, trophiesWon];
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
  
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];
function createFormation(formation)
{ 

  if(formation.length !== 0){
   pos = { defender: formation[0], midfield : formation [1], forward :formation[2] };
   return pos;
}else 
return null;
}


try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  return players.filter(player => player.debut === year);
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  return players. filter ( player => player. position === position);
}

//Progression 5 - Filter players that have won ______ award

  function filterByAward(award = 0) {
    if (award == 0) {
      return [];
    } else {
      let result = [];
      players.map((player) => {
        
        player.awards.filter((obj) => {
          if (obj.name === award) {
        
            result.push(Object.assign({}, player));
          }
        });
      });
      return result;
    }
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName , noOfTimes) {
	if (awardName == 0) {
		return [];
	} else {
		let result= [];
		players.map((player) => {
			let count = 0;
			player.awards.map((item) => {
				if (item.name === awardName) {
					count++;
				}
			});
			if (count === noOfTimes) {
				result.push(Object.assign({}, player));
			}
		});
		return result;
	}
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName , country) {
	if (awardName == 0) {
		return [];
	} else {
		let result = [];
		players.map((player) => {
			player.awards.map((item) => {
				if (item.name === awardName && player.country === country) {
					result.push(Object.assign({}, player));
				}
			});
		});
		return result;
	}
}



//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards = 0, team = 0, age = 0) {
	if (noOfAwards == 0 && team === 0 && age === 0) {
		return [];
	} else {
		let result = [];
		players.map((player) => {
			if (player.team === team && player.awards.length >= noOfAwards && player.age < age)
				result.push(Object.assign({}, player));
		});
		return result;
	}
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
