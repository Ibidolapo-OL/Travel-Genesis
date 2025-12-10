<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
  const getStartedButton = document.getElementById("getStartedBtn");
  if (getStartedButton) {
    getStartedButton.addEventListener("click", function () {
      console.log("Get Started button clicked! Navigating to Sign Up page...");

      window.location.href = "../Signup Screen/signup.html";

      alert("Proceeding to the next screen (Sign Up).");
    });
  } else {
    console.error('Error:Button with ID "getStartedBtn" not found.');
  }
});
=======
document.addEventListener('DOMContentLoaded', function(){
     
     const getStartedButton = document.getElementsByid('getStartedBtn');
     if (getStartedButton) {
          getStartedButton.addEventListener('click', function() {
               console.log('Get Started button clicked! Navigating to Sign Up page...');
               
          //window.location.href = 'signup.html';
          
          alert('Proceeding to the next screen (Sign Up).');
          });
     } else {
          console.error('Error:Button with ID "getStartedBtn" not found.');
     }
});
>>>>>>> 4304cac9346463e70d3cb616432572bc25222751
