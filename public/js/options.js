$('document').ready(() => {
    $('#newLobbyNameBtn').on('click', (event) => {
        event.preventDefault();

        const newCreatedLobby = {
            newLobbyName: $('#newLobbyName').val().trim(),
            user1: sessionStorage.getItem('user1')
        }
        console.log(newCreatedLobby);

        $.post('/api/lobbies', newCreatedLobby)
            .then(() => {
                window.location.href = "/lobbies.html";


            })
    })

})





$("#joinGameBtn").on('click', () => {
    
    $.get('/api/lobbies/:lobbyid/:currentUser')

    const nextJoinedUser = {

    }

    sessionStorage.setItem('user2', nextJoinedUser);

    window.location.href = "/lobbies.html";
});










