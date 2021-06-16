"use strict";

// TODO - write your code here.

const randomDamage = () => {
    return Math.ceil(Math.random() * 10);
} 

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random ());
    return randNum = randNum === 0 ? opt1 : opt2;
}

const attackPlayer = function(health) {
    return health - randomDamage();
}

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

//boolean//
const isDead = (health) => {
    return health <= 0;
}

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker == player1) {
            player2Health = attackPlayer(player2Health);
            logHealth (player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1,player2);
                break;
            }
               
        } else {
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}

console.log(fight("Stephanie", "Thomas", 100, 100));