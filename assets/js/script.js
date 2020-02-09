// isScroll = false;
// window.onscroll = function() {
//     if (window.scrollY > 10 && isScroll == false) {
//         isScroll = true;


//         const element = document.querySelector(".navbar-scolled");
//         element.classList.add("bar-scroll");



//     }

//     if (window.scrollY == 0) {

//         // this.alert('ll')
//         isScroll = false;
//         const element = document.querySelector(".navbar-scolled");
//         element.classList.remove("bar-scroll");

//     }
//     // if (!docked && (menu.offsetTop - scrollTop() < 0)) {
//     //   menu.style.top = 0;
//     //   menu.style.position = 'fixed';
//     //   menu.className = 'docked';
//     //   docked = true;
//     // } else if (docked && scrollTop() <= init) {
//     //   menu.style.position = 'absolute';
//     //   menu.style.top = init + 'px';
//     //   menu.className = menu.className.replace('docked', '');
//     //   docked = false;
//     // }
// };



const objParallaxs = document.querySelectorAll("[data-speed]");

window.addEventListener("scroll", scrollingHandler);

function scrollingHandler() {
    for (const objParallax of objParallaxs) {
        const direction = objParallax.dataset.direction == "up" ? "-" : "";
        const transformY = this.pageYOffset * objParallax.dataset.speed;

        if (objParallax.classList.contains("custom-nav")) {
            if (window.scrollY > 10) {
                objParallax.classList.add("bar-scroll");

            } else {
                objParallax.classList.remove("bar-scroll");

            }

        } else if (objParallax.classList.contains("logo")) {
            objParallax.style.transform = `translate3d(0,${direction}${transformY}px,0)`;

        } else {
            // objParallax.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
        }
    }
}


var navbarBtn = document.getElementById("navbar-mobile-open");
navbarBtn.addEventListener("click", function(e) {
    // document.getElementsByClassName("custom-bar").classList.add("custom-bar");
    document.getElementsByClassName("custom-bar")[0].classList.add("custom-nav-mobile");

    document.getElementById("navbar-mobile-close").classList.remove("custom-menu-icon");
    document.getElementById("navbar-mobile-open").classList.add("custom-menu-icon");

    document.getElementsByClassName("custom-nav")[0].classList.remove("custom-bar-left");
    document.getElementsByClassName("custom-nav")[0].classList.add("custom-bar-right");


});


var navbarBtn = document.getElementById("navbar-mobile-close");
navbarBtn.addEventListener("click", function(e) {


    document.getElementById("navbar-mobile-close").classList.add("custom-menu-icon");
    document.getElementById("navbar-mobile-open").classList.remove("custom-menu-icon");

    document.getElementsByClassName("custom-nav")[0].classList.remove("custom-bar-right");
    document.getElementsByClassName("custom-nav")[0].classList.add("custom-bar-left");
});