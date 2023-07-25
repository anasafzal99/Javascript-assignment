var player1 = prompt("Select your player");
var characters = ["Abel", "Abegeli", "Adon", "Akira", "Akuma", "Akuma", "alog", "Birdie"];
var actions = ["Punch", "Kick", "Hadoken", "Jump", "Special attack"];
var damage = [10, 10, 15, 0, 30];
var health1 = 100;
var health2 = 100;

// Initialize a variable to track if Hadoken has been used by either player
var hadokenUsed = false;

// Prompt the user to select a character from the list or randomly select one
var player1 = prompt("Please select a character: Ryo, Ken, Ehonda, Chun-Li, Ryu, or Guile");
if (characters.includes(player1)) {
  alert("You have selected " + player1 + ".");
} else {
   alert("Invalid input. A random character will be selected for you.");
   player1 = randomSelect(characters);
}

var player2 = randomSelect(characters);

// Display the characters of both players
console.log("Player 1: " + player1);
console.log("Player 2: " + player2);

// Start the game loop
var gameOver = false;
while (!gameOver) {
  // Prompt the user to select an action and check if it can be used
  var action1 = userSelect();
  action1 = checkAction(action1, hadokenUsed);
  
  // Randomly select an action for the second player and check if it can be used
  var action2 = randomSelect(actions);

  action2 = checkAction(action2, hadokenUsed);
  var [damage1, damage2] = calculateDamage(action1, action2);
  health1 -= damage2;
  health2 -= damage1;
  gameOver = displayResult(player1, player2, health1, health2);
  if (action1 === "Hadoken" || action2 === "Hadoken") {
    hadokenUsed = true;
  }
}

function randomSelect(array){
    return array[Math.floor(Math.random)() * (array.length)
    ];
}

function userSelect(){
    var input = prompt("Please select an action: Punch, Kick, Hadoken, Jump, or Special attack");
    if (actions.includes(input)){
        return input;
    }
    else {
        alert("Invalid input. A random action will be selected for you.");
        return randomSelect(actions);

    }

}

function checkAction(action, used) {
    if (action === "Hadoken" && used) {
        alert("You have already used Hadoken. A random action will be selected for you.");
        return randomSelect(actions);
        
    }
    else {
        return action;
    }
}

function caluclateDamage("action1", "action2") {
    var index1 = actions.indexOf(action1);
    var index2 = actions.indexOf(action2);
    var damage = damage[index1];
    var damage2 = damage[index2];
    if {
        action1 === action2
    }

    if ((action1 === "Hadoken" && action2 == "Jump")) || (action1 === "Jump" && action2 === "Hadoken")) {
        damage1 = 0;
        damage2 = 0;
      }

      if ((action1 === "Special attack" && (action2 === "Punch" || action2 === "Kick")) || ((action1 === "Punch" || action1 === "Kick") && action2 === "Special attack")) {
        damage1 *= 2;
        damage2 *= 2;
      }
      return [damage1, damage2];
    }
    
    // Function to display the result of each round and the final winner
    function displayResult(player1, player2, health1, health2) {
      // Display the actions and the health of both players
      console.log(player1 + " used " + action1 + ". " + player2 + " used " + action2 + ".");
      console.log(player1 + "'s health: " + health1 + "%");
      console.log(player2 + "'s health: " + health2 + "%");
      
      // Check if either player has reached zero health or below
      if (health1 <= 0 && health2 <= 0) {
        console.log("Both players are knocked out. The match is a tie.");
    return true;
  } else if (health1 <= 0) {
    // Player 1 is knocked out, player 2 wins
    console.log(player1 + " is knocked out. " + player2 + " wins!");
    return true;
  } else if (health2 <= 0) {
    // Player 2 is knocked out, player 1 wins
    console.log(player2 + " is knocked out. " + player1 + " wins!");
    return true;
  } else {
    return false;
  }

}


