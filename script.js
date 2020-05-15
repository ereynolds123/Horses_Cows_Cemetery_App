

/* The screen order
start --> teamName
teamName--> gameState
gameState--> congratulations || betterLuckNextTime
congratulations --> start
betterLuckNextTime --> start
*/


/* teamName screen
input teamName
pick which side if in teamName state
*/


/* gameplay screen
let points for both teams start at 0
if horse is clicked, add 10 points
if cow is clicked, subtract 1 point
if cemetery is clicked, subtract 100 points
keep a running tally of points
*/

//Declaring Variables
let scoreText;
let scoreTeamOne=0;
let scoreTeamTwo=0;

//This section clicks on the various buttons for Team One and adds to the point total Team One. 
let clickOnTeamOneButtons = 
  document.getElementById('horseTeamOne').addEventListener("click", addTenTeamOne);


  document.getElementById('cowTeamOne').addEventListener("click", subtractOneTeamOne);

  document.getElementById('cemeteryTeamOne').addEventListener("click", subtractOneHundredTeamOne);

  function clickedCemeteryTeamOne() {
    console.log ("cemetery team one")
  }

//This section clicks on the various buttons for Team Two and adds to the point total for Team Two. 
let clickOnTeamTwoButtons = 
  document.getElementById('horseTeamTwo').addEventListener("click", addTenTeamTwo);
  
  
  document.getElementById('cowTeamTwo').addEventListener("click", subtractOneTeamTwo);

  document.getElementById('cemeteryTeamTwo').addEventListener("click", subtractOneHundredTeamrTwo);


//Adding to Team One Score
function addTenTeamOne(){
  scoreTeamOne= scoreTeamOne +10;
  console.log(scoreTeamOne)
};

function subtractOneTeamOne(){
  scoreTeamOne= scoreTeamOne -1;
  console.log(scoreTeamOne)
};

function subtractOneHundredTeamOne(){
  scoreTeamOne= scoreTeamOne -100;
  console.log(scoreTeamOne)
};


//Adding to Team Two Score
function addTenTeamTwo(){
  scoreTeamTwo= scoreTeamTwo +10;
  console.log(scoreTeamTwo)
};

function subtractOneTeamTwo(){
  scoreTeamTwo= scoreTeamTwo -1;
  console.log(scoreTeamTwo)
};

function subtractOneHundredTeamrTwo(){
  scoreTeamTwo= scoreTeamTwo -100;
  console.log(scoreTeamTwo)
};


/*congratulations
maybe a balloon animation feature eventually
*/

/*betterLuckNextTime
maybe an animation eventually
*/
