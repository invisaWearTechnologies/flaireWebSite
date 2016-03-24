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
            maxCols: {
              required: "Please enter a password"
            }
          }
      }); // end validate for login form

      //validation for the create an account form
      $('#input2').validate({
          rules: {
            fullname: {
              required: true,
              minlength:2,
              lettersonly:true
            },
            email: {
              required: true,
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
              minlength: "name must be longer than 2 letters"
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
          }
      }); // end validate for create form 

}); 
