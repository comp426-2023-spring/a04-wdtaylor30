#!/usr/bin/env node

// import minimist
import minimist from "minimist";

// define custom -r flag
const args = minimist(process.argv.slice(2), {
    alias: {
        r: "rules"
    }
});

// import written functions from /lib/rpsls.js
import { playRPSLS, helpRPSLS, rulesRPSLS } from "../lib/rpsls.js";

// first check for help and rules flags
if (args.h || args.help) {
    helpRPSLS();
    process.exit();
} else if (args.r || args.rules) {
    rulesRPSLS();
    process.exit();
} else {
    // otherwise pull argument from command line
    var playerMove = args._[0];

    // play rock if no argument is passed
    if (!playerMove) {
        var result = { "player": "rock" };
        console.log(JSON.stringify(result));
        process.exit();
    }

    // if an argument is passed, make it lowercase
    playerMove = playerMove.toLowerCase();

    // play the game by randomizing cpu and process.exit() result
    var result = playRPSLS(playerMove);
    
    // if defined, log to console, otherwise exit silently
    if (!(typeof result == "undefined")) {
        console.log(JSON.stringify(result));
    }
    process.exit();
}
