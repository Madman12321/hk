// Add this script to your website to make the navbar sticky
window.onscroll = function () {
    makeNavbarSticky();
};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function makeNavbarSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
