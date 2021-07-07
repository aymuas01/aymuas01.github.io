window.onscroll = function(){
    var sidenav = document.getElementById("sidenav");
    if (sidenav.style.width == "250px") {
        sidenav.style.width = "0px";
    }
}
function myFunction() {
             var x = document.getElementById("sidenav");
            if (x.style.display === "block") {
                x.style.display = "none";
            } 
        }


