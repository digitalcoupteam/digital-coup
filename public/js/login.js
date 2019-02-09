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
            const newStoredName = loggerAttempt.loginUsername;
            sessionStorage.setItem('currentUser', newStoredName);
            // const username = loggerAttempt.loginUsername; 
            console.log(result);
            window.location.href = "/options.html";
        }


          

      })
});






