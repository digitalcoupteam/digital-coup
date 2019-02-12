$('document').ready(() => {
    const Joi = require('joi');

    $('#newLobbyNameBtn').on('click', (event) => {
        event.preventDefault();
        

        const newCreatedLobby = {
            newLobbyName: $('#newLobbyName').val().trim(),
            user1: sessionStorage.getItem('currentUser')
        }
        console.log(newCreatedLobby);

        $.post('/api/lobbies', newCreatedLobby)
            .then(() => {
                window.location.href = "/lobbies.html";


            })
    })

})





$("#joinGameBtn").on('click', () => {
console.log('working')
    const newUser = {
    user2: sessionStorage.getItem('currentUser')
    }
    $.post('/api/lobbies/', newUser)
    .then(()=> {

    });

    

    // sessionStorage.setItem('nextUser', ;

    window.location.href = "/lobbies.html";
});










