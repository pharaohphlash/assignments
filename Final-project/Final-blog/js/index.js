$(".mdl-card.shopping").hover(function() {
	$(this).children('.item-add-content').removeClass("hidden");
}, function() {
	$(this).children('.item-add-content').addClass("hidden");
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
