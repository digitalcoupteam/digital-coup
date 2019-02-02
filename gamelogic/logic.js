const express = require('express');
const app = express();
const mysql2 = require('mysql2');
const sequelize = require('sequelize');

        
const userInfo = require('userInfo');
// Pull in the export of userInfo class objects.
    // each user should have a:
        // influence 1 (inf1)---will be updated with the card they have and a boolean value
            // object with name and inHand
        // influence 2 (inf2)---will be updated with the card they have and a boolean value
            // object with name and inHand
        // economy --- integer 0-12---updated throughout the game
        // username
        // user id#

// Upon game beginning
const gameStart = (user1, user2, user3, user4) => {
    // update each users economy to 2 in (database)

    // grab available cards in court deck (database)
        // take 1 card (random) from court deck and add to user inf 1 with inHand true
        // update inf1 values (database)
        // remove card from court deck in (database)
    // repeat above a second time for inf2

    // repeat above for other 3 users.

    // set starting user (random)--->update (database)
};

const actionTurn = (user1, user2, user3, user4) => {
    // grab current user's turn from database
    // current user's turn page gets drop down of actions unlocked
    // await for CU to submit
    // .then update other all users with action submitted
    // counterActionTurn()
};

const counterActionTurn = (user1, user2, user3, user4, actionChosen, userTurn) => {
    // grab available counter-actions from action table (database)
    // display available counter-actions on non-currentTurn's screens.
    // await CAT submit
    // .then
    // if everyone accepts
        // complete actionChosen()
        // update turn counter (userTurn) in (database)
    // else 
    // let currentUser = userTurn
    // let bsCaller = whoever didn't accept first
    // otherthrow(currentUser, bsCaller, actionChosen)
};

const overthrow = (currentUser, bsCaller, actionChosen) => {
    // on all users display the counteraction
    // on currentUser display button to accept or counter the counter
    // if accept and actionChosen === "whichever"
        // don't allow
    // if CC'ed
        // overthrowCheck(currentUser, bsCaller, actionChosen)
};

const overthrowCheck = (currentUser, bsCaller, actionChosen) => {

// FOREIGN AID

    // if (actionChosen === "Foreign Aid") && (bsCaller.inf1.name==="Duke" || bsCaller.inf2.name==="Duke") {
        // remove 1 influence from currentUser
        // update to database with new Current user
        // }
    // if (actionChosen === "Foreign Aid") && !(bsCaller.inf1.name==="Duke" || bsCaller.inf2.name==="Duke") {
        // remove 1 influence from bsCaller
        // run foreignAid(currentUser)
        // update to database with new Current user
        // }

// ASSASSINATE

    // if (actionChosen === "Assassinate") && (bsCaller.inf1.name==="Contessa" || bsCaller.inf2.name==="Contessa") {
        // remove 1 influence from currentUser
        // remove 3 economy from currentUser
        // update to database with new Current user
        // }
    // if (actionChosen === "Assassinate") && !(bsCaller.inf1.name==="Contessa" || bsCaller.inf2.name==="Contessa") {
        // remove 1 influence from bsCaller
        // run assassinate(currentUser, target)
        // update to database with new Current user
        // }
    // needs more conditions possibly

// STEAL
    
    // if (actionChosen === "Steal") && (bsCaller.inf1.name==="Captain" || bsCaller.inf2.name==="Captain" || bsCaller.inf1.name==="Ambassador" || bsCaller.inf2.name==="Ambassador") {
        // remove 1 influence from currentUser
        // update to database with new Current user
        // }
    // if (actionChosen === "Steal") && !(bsCaller.inf1.name==="Captain" || bsCaller.inf2.name==="Captain" || bsCaller.inf1.name==="Ambassador" || bsCaller.inf2.name==="Ambassador") {
        // remove 1 influence from bsCAller
        // update to database with new Current user
        // run steal(currentUser, target)
        // }
    // needs more conditions.
    // current has captain and bsCaller has ambassador or captain ===> new turn
    // current has captain and bsCaller 

// EXCHANGE
    
    // if (actionChosen === "Exchange") && !(currentUser.inf1.name==="Ambassador" || currentUser.inf2.name==="Ambassador") {
        // remove 1 influence from currentUser
        // update to database with new Current user
        // }
    // if (actionChosen === "Exchange") && (currentUser.inf1.name==="Ambassador" || currentUser.inf2.name==="Ambassador") {
        // remove 1 influence from bsCaller
        // run exchange(currentUser)
        // update to database with new Current user
        // }
        
// TAX

    // if (actionChosen === "Tax") && (currentUser.inf1.name==="Duke" || currentUser.inf2.name==="Duke") {
        // run tax(currentUser) 
        // }
    // if (actionChosen === "Tax") && !(currentUser.inf1.name==="Duke" || currentUser.inf2.name==="Duke") {
        // remove 1 influence from current
        // update currentUser counter
        // }
}

