  $(function() {
          $('#btnSignUp').click(function() {
          console.log("This is working so far");      
              $.ajax({
                  url: '/signUp',
                  data: $('form').serialize(),
                  type: 'POST',
                  success: function(response) {
                      console.log(response);
                      window.alert('User created!!!');
                  },
                  error: function(error) {
                      console.log(error);
                      window.alert('Problem');
                  }
              });
          });
          $('#btnSignUp').click(function() {

          });
      });
