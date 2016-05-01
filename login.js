/* 
    Alexander Chen
    Alexander_Chen@student.uml.edu
*/

    /* This function does the validation */
    $(document).ready(function() {

      //validation for the login form
      $('#input').validate({
          rules: {
            username: {
              required: true       
            },
            password: {
              required: true
            }   
          }, // end rules
         
          messages: {
            username: {
              required: "Please enter a username"
            },
            password: {
              required: "Please enter a password"
            }
         },
         errorContainer: $('#errorContainer'),
         errorLabelContainer: $('#errorContainer ul'),
         wrapper: 'li'
      }); // end validate for login form

      //validation for the create an account form
      $('#input2').validate({
          rules: {
            fullname: {
              required: true,
              minlength:2,
            },
            email: {
              required: true,
              email: true,
              minlength:4
            },
            Username: {
              required: true       
            },
            Password: {
              required: true
            }   
          }, // end rules
          
          messages: {
            fullname: {
              required: "Please enter your name",
              minlength: "Name must be longer than 2 letters",
            },
            email: {
              required: "Please enter an email",
              minlength: "email must be more than 4 characters long"
            },
            Username: {
              required: "Please enter a username"
            },
            Password: {
              required: "Please enter a password"
            }
        },
        errorContainer: $('#errorContainer'),
        errorLabelContainer: $('#errorContainer ul'),
        wrapper: 'li'
      }); // end validate for create form 

}); 
