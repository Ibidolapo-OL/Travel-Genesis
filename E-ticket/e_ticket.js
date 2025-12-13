document.addEventListener("DOMContentLoaded", function () {
  const retrunhome = document.getElementById("return-button");
  if (retrunhome) {
    retrunhome.addEventListener("click", function () {
      console.log("returning to home page...");

      window.location.href = "../Home-screen/home.html";
    });
  }
});
//above is function to return to home
