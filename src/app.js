//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
const createManager = (managerName, managerAge, currentTeam, trophiesWon) => [managerName, managerAge, currentTeam, trophiesWon];


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
const createFormation = (formation) => {
  if (formation.length === 0) return null;
  [defender, midfield, forward] = formation;
  return { defender, midfield, forward };
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
const filterByDebut = (year) => {
  return players.filter(player => player.debut === year);
}

//Progression 4 - Filter players that play at the position _______
const filterByPosition = (position) => {
  return players.filter(player => player.position === position);
}

//Progression 5 - Filter players that have won ______ award
const filterByAward = (awardName) => {
  return players.filter(player => player.awards.filter(award => award.name === awardName).length > 0);
}

//Progression 6 - Filter players that won ______ award ____ times
const filterByAwardxTimes = (awardName, noOfTimes) => {
  return players.filter(player => player.awards.filter(award => award.name === awardName).length === noOfTimes);
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
const filterByAwardxCountry = (awardName, country) => {
  return players.filter(player => player.awards.filter(award => award.name === awardName).length > 0 && player.country === country);
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
const filterByNoOfAwardsxTeamxAge = (noOfAwards, team, age) => {
  return players.filter(player => player.awards.length >= noOfAwards && player.team === team && player.age < age);
}
//Progression 9 - Sort players in descending order of their age
const sortByAge = () => {
  return players.sort((a, b) => b.age - a.age);
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
const FilterByTeamxSortByNoOfAwards = (team) => {
  return players.filter(player => player.team === team).sort((a, b) => b.awards.length - a.awards.length);
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
const SortByNamexAwardxTimes = (awardName, noOfTimes, country) => {
  return players.filter(player => player.awards.filter(award => award.name === awardName).length === noOfTimes && player.country === country).sort((a, b) => a.name.localeCompare(b.name));
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
const SortByNamexOlderThan = (age) => {
  return players.filter(player => player.age > age).sort((a, b) => b.name.localeCompare(a.name)).map(player => {
    player.awards.sort((a, b) => b.year - a.year);
    return player;
  });
}