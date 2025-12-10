document.addEventListener("DOMContentLoaded",()=>{
     //---------------------------------------------------------//
     const form = document.querySelector("#signup-form");
     const termsCheckbox = document.querySelector("#terms");
     const signupBtn =document.querySelector("#submit-btn");
     const passwordInput = document.querySelector("#password");
     const eyeIcon =document.querySelector("#eyeIcon");

     const fullname = document.querySelector("#fullname");
     const email = document.querySelector("#email");

     if (eyeIcon && passwordInput){
          eyeIcon.addEventListener("click", function (){
      //check the current type of the input
      const currentType = passwordInput.getAttribute('type');
      if (currentType === 'password') {
          passwordInput.setAttribute("type", "text");
          this.src= "eye-open.png";
      } else {
          passwordInput.setAttribute("type", "password");
          this.src= "eye-close.png";
      }

     });

     }
     //--- button state toggle function (check T&C)---
     function toggleButtonState() {
          if (termsCheckbox.checked) {
               signupBtn.classList.add('is-active');
               signupBtn.disabled = false;
          } else {
               signupBtn.classList.remove('is-active');
               signupBtn.disabled = true;
               
          }
     }

     termsCheckbox.addEventListener('change',toggleButtonState);

     //---form validation---
     if (form) {
       form.addEventListener('submit', function(e) {
          //prevent the page from reloading immediately
          e.preventDefault();

          let isValid = true;
          let errorMessage ="";

          //check Full Name
          if (fullname.value.trim()=== ""){
               isValid = false;
              errorMessage +="-Please enter your full name.\n";
              fullname.style.borderColor ="red";
          }

          //check password 
          if(passwordinput.value.trim()=== ""){
               isValid =false;
               errorMessage+="Please enter a password.\n";
               passwordInput.style.borderColor = "red";
          }

          //simple email verification
          if (email.value.trim()==="" || !email.value.includes('@')){
               isValid = false;
               errorMessage += "-Please enter a valid email address.\n";
               email.style.borderColor = 'red';
          }

          //check terms & conditions
          if(!termsCheckbox.checked) {
               isValid = false;
               errorMessage += "-You must agree to the Terms & Conditions.\n";
          }

          if (isValid) {
               alert("Account created successfully for" + fullname.value + "!");
               form.submit()
          } else {
               alert("Please fix the following errors:\n" + errorMessage);
          }
     });

     }
     
     [fullname, email, passwordInput].forEach(input => {
          input.addEventListener('input', () => {
               input.style.borderColor ="#eee";
          });
     });
});