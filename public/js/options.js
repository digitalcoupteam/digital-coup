$('document').ready(() => {
    $('#newLobbyNameBtn').on('click', (event) => {
        event.preventDefault();

        const newCreatedLobby = {
            newLobbyName: $('#newLobbyName').val().trim(),
            user1: sessionStorage.getItem('lobbyCreator')
        }
        console.log(newCreatedLobby);

        $.post('/api/lobbies', newCreatedLobby)
            .then(() => {
                window.location.href = "/lobbies.html";


            })
    })

})





$("#joinGameBtn").on('click', () => {


    const newJoinedUser2 = {
        
    }

    sessionStorage.setItem('user2', newJoinedUser2);

    window.location.href = "/lobbies.html";
});










