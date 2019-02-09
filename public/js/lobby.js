$('document').ready(() => {

    $.get('/api/lobbies/all', (data)=> {
        for(let i = 0; i < data.length; i++) {
            $('#lobby-table').html(`<tr data-id="${data[i].id}"><td>${data[i].lobbyName}</td><td>${data[i].user1}<td></tr>`);
        }
    })
});