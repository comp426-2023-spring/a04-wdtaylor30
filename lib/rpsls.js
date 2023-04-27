// This file contains all of the exportable export functions for both rps and rpsls.

// TODO: May have to rewrite this specifically for a04. AGTG.

// #region rps
// RPS export functions
const rpsMoves = ["rock", "paper", "scissors"]

export function playRPS(playerMove) {
    // first, check the validity of the player's move
    if (!rpsMoves.includes(playerMove)) {
        console.error(`${playerMove} is out of range.`);

         // display help and rules, according to instructions
         rulesRPS();
         helpRPS();
 
         return;
    }

    // if the player's move is valid, proceed w the game
    // randomly generate the computer's move within the rps ruleset
    const randIndex = Math.floor(Math.random() * rpsMoves.length);
    const computerMove = rpsMoves[randIndex];

    // compare computer and player moves
    // tie
    if (playerMove == computerMove) { 
        return JSON.stringify({ 
            "player": playerMove,
            "opponent": computerMove,
            "result": "tie"
        });
    };

    if (
        (playerMove == "rock" && computerMove == "scissors") ||
        (playerMove == "scissors" && computerMove == "paper") ||
        (playerMove == "paper" && computerMove == "rock")
        ) { return JSON.stringify({
                "player": playerMove,
                "opponent": computerMove,
                "result": "win"
            });
        } else {
            return JSON.stringify({
                "player": playerMove,
                "opponent": computerMove,
                "result": "lose"
            });
        }

}

export function helpRPS() {
    // print command help
    const help = `Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`;
    console.log(help);
    return;
}

export function rulesRPS() {
    // print rules for regular rps
    const rules = `Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`;
    console.log(rules);
    return;
}

// #endregion

// #region rpsls
const rpslsMoves = ["rock", "paper", "scissors", "lizard", "spock"]

export function playRPSLS(playerMove) {
    // first, check the validity of the player's move
    if (!rpslsMoves.includes(playerMove)) {
        console.error(`${playerMove} is out of range.`);

        // display help and rules, according to instructions
        rulesRPSLS();
        helpRPSLS();

        return;
    }

    // if the player's move is valid, proceed w the game
    // randomly generate the computer's move within the rps ruleset
    const randIndex = Math.floor(Math.random() * rpsMoves.length);
    const computerMove = rpsMoves[randIndex];

    // compare computer and player moves
    // tie
    if (playerMove == computerMove) {
        return JSON.stringify({ 
            "player": playerMove,
            "opponent": computerMove,
            "result": "tie"
        });
    };

    // player wins
    if (
        (playerMove == "rock" && (computerMove == "scissors" || computerMove == "lizard")) ||
        (playerMove == "scissors" && (computerMove == "paper" || computerMove == "lizard")) ||
        (playerMove == "paper" && (computerMove == "rock" || computerMove == "spock")) ||
        (playerMove == "lizard" && (computerMove == "paper" || computerMove == "spock")) ||
        (playerMove == "spock" && (computerMove == "rock" || computerMove == "scissors"))
        ) { return JSON.stringify({
                "player": playerMove,
                "opponent": computerMove,
                "result": "win"
            });
        } else {
            return JSON.stringify({
                "player": playerMove,
                "opponent": computerMove,
                "result": "lose"
            });
        }

}

export function helpRPSLS() {
    // print command help
    const help = `Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`;
    console.log(help);
    return;
}

export function rulesRPSLS() {
    // print rules for regular rps
    const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`;
    console.log(rules);
    return;
}

// #endregion