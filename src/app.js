//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
    var array = { name: managerName, age: managerAge, team: currentTeam, trophies: trophiesWon };
    return Array(array.name, array.age, array.team, array.trophies);
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
function createFormation(array) {
    if (array.length === 0) {
        return null;
    }
    var array = { defender: array[0], midfield: array[1], forward: array[2] };
    return array;
}
// Dont edit the following code

try {
    var formationObject = createFormation(formation);
} catch (e) {
    //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
    let list = [];
    players.filter(details => {
        if (details.debut === year) {
            list.push(details);
        }
    });
    return list;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
    let list = [];
    players.filter(details => {
        if (details.position === position) {
            list.push(details);
        }
    });
    return list;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardwon) {
    let list = [];
    players.filter(details => {
        details.awards.forEach(val => {
            if (val.name === awardwon) {
                list.push(details);
            }
        });
    });
    return list;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardwon, times) {
    let count = 0;
    let list = [];
    players.filter(details => {
        details.awards.forEach(val => {
            if (val.name === awardwon) {
                count += 1;
            }
            if (count === times) {
                list.push(details);
                count = 0;
            }
        });
        count = 0;
    });
    return list;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardwon, countryname) {
    let list = [];
    players.filter(details => {
        details.awards.forEach(val => {
            if (val.name === awardwon && details.country === countryname) {
                list.push(details);
            }
        });
    });
    return list;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(awardwontimes, teamname, ageofplayer) {
    let list = [];
    players.filter(details => {
        if (details.team === teamname && details.age < ageofplayer && details.awards.length >= awardwontimes) {
            list.push(details);
        }
    });
    return list;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge() {
    player = players.sort(function(a, b) {
        return b.age - a.age
    });
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(teamname) {
    let list = players.filter(details => {
        return details.team === teamname;
    })
    return list.sort(function(a, b) {
        return b.awards.length - a.awards.length
    })
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order