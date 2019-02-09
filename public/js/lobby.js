$('document').ready(() => {

    $.get('/api/lobbies/all', (data)=> {
        console.log(data);

        let [lobby ] = data

        let {user1, user2, user3, user4} = lobby;

        console.log(user1);
        console.log(user2);

        
        


        for(let i = 0; i < data.length; i++) {
            $('#lobby-table').html(`<tr data-id="${data[i].id}"><td>${data[i].lobbyName}</td><td>${data[i].user1}<td></tr>`);
        }
    })
});


$('#joinLobbyBtn').on('click', ()=> {
    const currentUser = sessionStorage.getItem('currentUser');
    console.log(currentUser);

    const userObject = {}

    $.get('/api/lobbies/all', (data)=> {
        console.log(data);

        let [lobby ] = data

        let {user1, user2, user3, user4} = lobby;

        if(user1 === null){
            // myUser = currentUser
            userObject.user1 = currentUser;
        }
        else if(user2 === null){
            // myUser = currentUser
            userObject.user2 = currentUser;
        }
        else if(user3 === null){
            // myUser = currentUser
            userObject.user3 = currentUser;
        }
        else if(user4 === null){
            // myUser = currentUser
            userObject.user4 = currentUser;
        }

        console.log('userObj', userObject);

        
        


        // const userObject = {
        //     user2: currentUser
        // }


    })
    $.put('/api/lobbies', userObject)
        .then((result)=> {
            console.log('result POST ',result)
        })




    // const user2Object = {
    //     user2: currentUser
    // }
    // $.post('api/lobbies', user2Object)
    // .then((result)=> {
    //     console.log(result)
    // })

    // $.get('/api/lobbies/all', (data)=> {

    //     console.log(data)
    // })

});
