/* Manage Class Funtions https://www.sitepoint.com/add-remove-css-class-vanilla-js/ */
function addClass(e, l) {
    elements = document.querySelectorAll(e);
    for (var s = 0; s < elements.length; s++) elements[s].classList.add(l);
}
function removeClass(e, l) {
    elements = document.querySelectorAll(e);
    for (var s = 0; s < elements.length; s++) elements[s].classList.remove(l);
}

// Using event delegation https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js/#web-performance
document.addEventListener(
    "click",
    function(event) {
        // Mobile Menu Toggle
        if (event.target.matches(".menu-toggle")) {
            if (event.target.classList.contains("active")) {
                removeClass(".menu-toggle, .nav-mobile, .site-header", "active");
            } else {
                addClass(".menu-toggle, .nav-mobile, .site-header", "active");
            }
        }
    },
    false
);
