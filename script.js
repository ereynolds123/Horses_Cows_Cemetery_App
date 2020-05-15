

/* The screen order
start --> gameState
gameState--> start */



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

//This section clicks on the various buttons for Team Two and adds to the point total for Team Two. 
let clickOnTeamTwoButtons = 
  document.getElementById('horseTeamTwo').addEventListener("click", addTenTeamTwo);
  
  
  document.getElementById('cowTeamTwo').addEventListener("click", subtractOneTeamTwo);

  document.getElementById('cemeteryTeamTwo').addEventListener("click", subtractOneHundredTeamTwo);


//Adding to Team One Score
function addTenTeamOne(){
  scoreTeamOne= scoreTeamOne +10;
  document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
};

function subtractOneTeamOne(){
  scoreTeamOne= scoreTeamOne -1;
  document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
};

function subtractOneHundredTeamOne(){
  scoreTeamOne= scoreTeamOne -100;
  document.getElementById("scoreTotalTeamOne").innerHTML = scoreTeamOne;
};


//Adding to Team Two Score
function addTenTeamTwo(){
  scoreTeamTwo= scoreTeamTwo +10;
  document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
};

function subtractOneTeamTwo(){
  scoreTeamTwo= scoreTeamTwo -1;
  document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
};

function subtractOneHundredTeamTwo(){
  scoreTeamTwo= scoreTeamTwo -100;
  document.getElementById("scoreTotalTeamTwo").innerHTML = scoreTeamTwo;
};

