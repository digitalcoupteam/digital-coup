const express = require('express');
const app = express();
const mysql2 = require('mysql2');
const Sequelize = require('sequelize');
const userLogins = require('../models/userLogins');

// SOCKETS

        
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
    for (i=1; i<5; i++) {
        // update each users economy to 2 in (database)
        db.gameInfo.update({
            economy: 2,

        }, {
            where: {
                id: user${i}
            }
        })


    }
    

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

};

// ========================================================================================================
// LITTLE ACTIONS
// ========================================================================================================

const getCoin = (whoGetsCoin, howMuch) => {
    // GET whoGetsCoin.eco
    // whoGetsCoin.eco += howMuch
    // PUT whoGetsCoin.eco
};

const redrawInf = (whoIsRedrawing, whichInfluenceIsRedrawn) => {
    // GET courtDeck
    // add whichInfluenceIsRedrawn to courtDeck
    // PUT courtDeck
};

const loseInf = (whoLosesInfluence) => {
    // GET whoLoses.inf1 and whoLoses.inf2
    // ask which influence the losing user wants to lose
    // PUT updated influence
};

const getLost = (thisUserIsDunzo) => {
    // PUT thisUserIsDunzo.isAlive = false
    // They are out of game
};

const nextTurn = (currentUserTurn) => {
    // GET list of users still alive
    // if currentUserTurn === user4
        // userTurn = user1
    // else increment currentUserTurn
    // PUT currentUserTurn
};

const exchangeCards = (user) = {
    // GET influences
    // User chooses which influence to offer for exchange
    // GET 2 random cards from COURT DECK
    // Including offeredInfluence and above 2 randoms, choose 1 of the 3 influences to keep
    // ADD refused cards to COURT DECK
};

const stealYourCoins = (user, target) = {
    // GET economy of target
    // -2 coins from economy of target
    // PUT new economy of target
    // GET economy of user
    // +2 coins to user
    // PUT new economy of user
};

// ========================================================================================================
// BIG ACTIONS
// ========================================================================================================

const wantSomeForeignAid = (user, bsCaller, action, counterAction, cced) => {
    
    // switch cases
    switch(action && counterAction && cced) {

        // counter with Duke is accepted
        case (action === "ForeignAid") && (counterAction === "Duke") && (cced === false) :
            nextTurn(user);
            // no action
            break;
 
        // no counteractions taken
        case (action === "ForeignAid") && (counterAction === "none") && (cced === false) :
            // user +2 coins ( getCoin(user, 2) )
            getCoin(user, 2);
            nextTurn(user);
            break;

        // truthful bsCaller with a Duke gets CC'ed
        case (action === "ForeignAid") && (counterAction === "Duke") && (cced === true) :
            // bsCaller Redraws ( redrawInf(bsCaller, Duke) )
            redrawInf(bsCaller, "Duke");
            // User -1 INF ( loseInf(user) )
            loseInf(user);
            nextTurn(user);
            break;

        // Dishonest bsCaller without Duke gets CC'ed
        case (action === "ForeignAid") && (counterAction === "noDuke") && (cced === true) :
            // bsCaller -1 INF ( loseInf(bsCaller) )
            loseInf(bsCaller);
            // user +2 coins ( getCoin(user, 2) )
            getCoin(user, 2);
            break;
    }
};

const wannaTax = (user, bsCaller) => {
    // switch cases

        // no counteractions taken
            // user +3 coins ( getCoin(user, 3) )

        // BS called on !Duke
            // User -1 INF ( loseInf(user) )

        // BS called on a true Duke
            // bsCaller -1 INF (loseInf(bsCaller))
            // user +3 coins (getCoin(user, 3))
            // User redraws ( redrawInf(user, Duke) )
};

const wannaAssassinate = (user, bsCaller, targettedUser) => {
    // switch cases

        // user has Assassin and bs is called
            // User pays 3 coins to treasury ( getCoins(user, -3) )
            // bsCaller loses all Influences and has lost ( getLost(bsCaller) )
            // user redraws with assassin card ( redrawInf (user, assassin) )

        // user CC'ed a dishonest bsCaller that doesnt have Contessa
            // User pays 3 coins to treasury ( getCoins(user, -3) )
            // bsCaller loses all Influences and has lost ( getLost(bsCaller) )

        // Assassination accepted
            // User pays 3 coins to treasury ( getCoins(user, -3) )
            // targettedUser loses 1 INF ( loseInf(targettedUser) )

        // BS called and !Assassin
            // User pays 3 coins to treasury ( getCoins(user, -3) )
            // User loses 1 INF ( loseInf(user) )

        // bsCaller declares block with Contessa and user accepts
            // User pays 3 coins to treasury ( getCoins(user, -3) )

        // user CC'ed an honest bsCaller that does have Contessa
            // User pays 3 coins to treasury ( getCoins(user, -3) )
            // User loses 1 INF ( loseInf(user) )
            // bsCaller redraws with Contessa card ( redrawInf(bsCaller, Contessa) )
};

const wannaExchange = (user) => {
    // switch cases

        // exchange accepted
            // exchangeCards(user)

        // BS is called but user has Ambassador
            // bsCaller loses 1 INF ( loseInf(bsCaller) )
            // User redraws 1 INF ( redrawInf(user, Ambassador) )
            // exchangeCards(user)

        // BS is called and !Ambassador
            // user loses 1 INF ( loseInf(user) )
};

const wannaSteal = (user, target) => {
    // switch cases

        // BS Called and Duke is true
            // Take 2 coins from target ( stealYourCoins(user, target) )
            // bsCaller loses 1 INF ( loseInf(bsCaller) )
            // User redraws ( redrawInf(user, Duke) )

        // BS called and !duke
            // user loses 1 INF ( loseInf(user) )
        
        // Block is accepted
            // no action

        // block is cc'ed and bsCaller has ambassador or captain
            // bsCaller redraws their ambassador or captain card ( redrawInf(bsCaller, CAPTAIN OR AMBASSADOR) )
            // user loses 1 INF ( loseInf(user) )

        // block is cc'ed and !ambassador and !captain
            // Take 2 coins from target ( stealYourCoins(user, target) )
            // bsCaller loses 1 INF ( loseInf(bsCaller) )

        // Steal is accepted
            // Take 2 coins from target ( stealYourCoins(user, target) )
};