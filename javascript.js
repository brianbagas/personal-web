function gantiTema(){
    var element  = document.body;
    element.classList.toggle("dark-mode");
}
function myNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }