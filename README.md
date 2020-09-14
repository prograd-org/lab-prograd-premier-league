![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | ProGrad Premier League

Alex is a young enterprenuer who is out to assemble his own football team to enter the FPL. Ambitious much? Well, he seems to have the resources to do it though. He has collected data of players across various teams. He now needs to arrange this data inorder to make sense of it. He needs an application that will help him compare and contrast abilities of different players.

Alas, for all the money in the world, he can't find a decent programmer to help him with this task. He's designed the front-end of the application and it looks great. He needs **YOU** to help him code the functionalities in the back-end though. Go to the `src/app.js` file and complete all the unfinished code to propel this young man's football dream.

## What should you do
```
Fork this repo
Clone this repo
Practice JavaScript Basics - Operators, Conditions, Loops
```

## How To Submit
```
Upon completion, run the following commands:

git add .
git commit -m "ProGrad ID"
git push origin master

And finally, create a pull request so your ProGrad Mentor (PM) can review your work.
```

## Starter code

The `src/data.js` contains an array of 250 players. We are talking about the array of 25 _objects_ containing the info about each player. Here is one example of how the data will be displayed:

```javascript
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
}
```

### Test

Ohh yes! We have our beloved tests, and you already know how this works. Open the `SpecRunner.html` file on your browser and start coding to pass the test. Remember to focus on one test at a time and read carefully the instructions to understand what you have to do.

### Progression 1: Gotta coach em all!

Every team starts off with a manager. We need someone to take care of them when Alex isn't around. Create a function `createManager()` that gets the manager's details `managerName, managerAge, currentTeam, trophiesWon` in the same order, and _return an array_ with the manager's details.

### Progression 2: Plan of Action

The coach has prepared a plan of action for the team. He has the formation ready and will provide us with an array `[defender, midfield, forward]`. He will give us the numbers and we'll need to print that layout on our screen so that we know who to pick (for instance, how many midfielders do we need?). Create a function `createFormation()` that _returns an object_ with the data and keys in the order given in the array.

### Progression 3: Twinkle Twinkle, football star!

Alex needs to know when a player debuted. Alex was just going through some astrological facts and had discovered that there are specific years where lady luck favoured all. He believes that selecting those players would be great for his team. Create a function `filterByDebut()` which takes `year` as an argument and _returns an array of player objects_ that debuted in the given year.

### Progression 4: Get in the box!

We've already decided the team formation. Now we need to filter players based on their position. This would help Alex decide who goes where. Create a function `filterByPosition()` which takes `position` as an argument and _returns an array of player objects_ that play in that position.

### Progression 5: Ooh...shinyyy!

Who doesn't want a player with multiple medals and trophies in his closet? Alex wants you to retrieve data of players who have won a specific award. Create a function `filterByAward()` which takes `awardName` as an argument and _returns an array of player objects_ that who have won that award.

### Progression 6: One a penny, two a penny, hot cross shoots!

Now that we've got players that have won an award, we need to find out how many times they've won a specific award. The more, the merrier. Create a function `filterByAwardxTimes()` which takes `awardName, noOfTimes` as arguments and _returns an array of player objects_ that have won a specific ward, a given number of times.

### Progression 7: But, where do you come from?

Alex prefers some countries over others. That doesn't mean he's willing to ignore achievements. Why? Well, let's not get into details. Create a function `filterByAwardxTimes` which takes `awardName, country` as arguments and _returns an array of player objects_ that have won a specific award and belong to the given country.

### Progression 8: This, that and then some more...

Alex is getting very meticulous with his selection criteria. He believes youth overpower age but they should have won a certain number of awards and belong to his favourite team. Create a function `filterByNoOfAwardsxTeamxAge()` which takes `noOfAwards, team, age` as arguments and _returns an array of player objects_ that have won at least the given number of awards, belong to a specific team and are younger than mentioned age.

### Progression 9: Old is gold.

You know what they say, "Age before beauty". Alex wants you to display the players in order of age, oldest first. He wants to pick some more experienced players than what we currently have in our roster. Create a function `SortByAge()` which _returns an array of player objects_ in descending order of their age.

### Progression 10: Team Game

Retrieve players of a specific team. Then, display them in descending order of number of awards won by each player. Create a function `FilterByTeamxSortByNoOfAwards()` which teakes `team` as an argument and _returns an array of player objects_.

### Challenge 1: The devil is in the details

Find out players who have won a certain award a given number of times. They must also belong to Alex's favourite country. Sort them in good old fashioned alphabetical order. Create a function `SortByNamexAwardxTimes()` which takes `awardName, noOfTimes, country` as arguments and _returns an array of player objects_.

### Challenge 2: The golden goal

Time to get things finally sorted out. So, two things - one, sort players older than a given age in the alphabetiacl order. Also, sort their awards based on reverse chronological order. Create a funtion `SortByNamexOlderThan()` which takes an argument `age` and _returns and array of player objects_.

Happy Coding ProGrad ❤️
