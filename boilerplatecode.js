/* All screens
boiler plate code
*/


/*const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}*/

let states = {
    "start": {canChangeTo: ["teamName"]},
    "teamName": {canChangeTo: ["gameState"]},
    "gameState": {canChangeTo: ["congratulations", "betterLuckNextTime"]},
    "congratulations": {canChangeTo: ["start"]},
    "betterLuckNextTime": {canChangeTo: ["start"]},
  }
  
  /* Potential code to switch states. Really, I need to connect the
  state to the clicked button.
  
  let currentState = "start";
  
  function enterState(newState) {
    let validTransitions = states[currentState].canChangeTo;
    if (validTransitions.includes(newState)) {
      currentState = newState;
    }
  */