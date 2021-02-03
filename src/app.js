//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  manager_detail=[managerName,managerAge,currentTeam,trophiesWon];
  return manager_detail
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
    return null

  let obj = {
    defender: arr[0],
    midfield: arr[1],
    forward: arr[2]
  };
  return obj
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}


//Progression 3 - Filter players that debuted in 2003 year
function filterByDebut(year){
  var list=[];
  players.filter(details=>{
    if (details.debut===year){list.push(details)}
  })
  return(list);}

//Progression 4 - Filter players that play at the position forward
pos="Forward";
function filterByPosition(pos){
   let list=[];
   players.filter(details=>{
     if(details.position===pos){
        list.push(details)
      }})
  return(list);
}

//Progression 5 - Filter players that have won  "FIFA World Player of the Year" award
function filterByAward(namee){
  let list=[];
  players.filter(data=>{data.awards.forEach(val=>{
    if(val.name===namee){list.push(data)}
  })})
return(list);
}

//Progression 6 - Filter players that won "African Player of the Year"award 2 times
function filterByAwardxTimes(award_name,no_of_time){
  var count=0;
  let list=[];
  players.filter(data=>{data.awards.forEach(val=>{
    if(val.name===award_name){
      count+=1;
    }})
    if(count===no_of_time){
    list.push(data)
    count=0;
  }
  count=0;
})
  
 return(list);
 }

//Progression 7 - Filter players that won "FIFA FIFPro World XI" award and belong to ______ country
function filterByAwardxCountry(award_name,countrry){
  let list=[]; 
  for(var i=0;i<players.length;i++){
    if(players[i].country===countrry){
      for(var j=0;j<players[i].awards.length;j++){
        if(players[i].awards[j].name===award_name){
          list.push(players[i])
        }
    }
    }
    }
    return list;

}
//Progression 8 - Filter players that won atleast 2  awards, belong to "FIFA FIFPro World XI"team and are younger than 30
function filterByNoOfAwardsxTeamxAge(no_of_time,teamm,agge){
  let list=[];
  players.forEach(data=>{
    if(data.team===teamm && data.age<agge && data.awards.length>=no_of_time){list.push(data)}
  })
  return list
}
//Progression 9 - Sort players in descending order of their age
function SortByAge(){
    plyer=players.sort(function(a,b){return b.age-a.age})
}

//Progression 10 - Sort players beloging to team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(teamm){
  let list=players.filter(data=>{
    return data.team===teamm;
    })
  return list.sort(function(a,b){return b.awards.length-a.awards.length})
  }

//Challenge 1 - Sort players that have won "FIFA FIFPro World XI" award 2 times and belong to "Brazil" country in alphabetical order of their names
awardname="FIFA FIFPro World XI";
function SortByNamexAwardxTimes(awardname,countrry,no_of_time){
  let list=players.filter(data=>{
    return data.country===countrry;
  })
  let new_list=[];
  let count=0;
  for(i=0;i<list.length;i++){
    for(j=0;j<list[i].awards.length;j++){
      if(awardname===list[i].awards[j].name){
        count+=1;}
    if(count>=no_of_time){
      new_list.push(list[i])
      count=0;
    }
    else{
      count=0;
    }
    }
    }
  return new_list.sort(function(a,b){return a.name-b.name})
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
