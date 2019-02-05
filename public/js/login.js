$("#loginUser").on("submit", function (event) {
    event.preventDefault();

    const loggerAttempt = {
        loginUsername: $('#loginUsername').val().trim(),
        loginPassword: $('#loginPassword').val().trim()
    }



    $.post('/api/login', loggerAttempt)
      .then((result) => {
          console.log(result);
        window.location.href = "/lobbies";
debugger;

      })
});






