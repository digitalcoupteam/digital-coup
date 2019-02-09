$('document').ready(() => {
    $('#newLobbyNameBtn').on('click', (event) => {
        event.preventDefault();

        const newCreatedLobby = {
            newLobbyName: $('#newLobbyName').val().trim(),
            user1: sessionStorage.getItem('username')
        }
        console.log(newCreatedLobby);

        $.post('/api/lobbies', newCreatedLobby)
            .then(() => {
                window.location.href = "/lobbies.html";


            })
    })

})





$("#joinGameBtn").on('click', () => {
    window.location.href = "/lobbies.html";
});










