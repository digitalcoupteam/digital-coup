$("#loginUser").on("submit", function (event) {
    event.preventDefault();

    const loggerAttempt = {
        loginUsername: $('#loginUsername').val().trim(),
        loginPassword: $('#loginPassword').val().trim()
    }



    $.post('/login', loggerAttempt)
      .then((result) => {
        if(result == null) {
            console.log('wrong creds')
              $('#error-msg').html('credentials invalid')
              $('#loginUsername').val("");
              $('#loginPassword').val("");

        } else {
            console.log(result);
            window.location.href = "/lobbies";
        }


          

      })
});






