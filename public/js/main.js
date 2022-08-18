
//WINDOW ONSCROLL AND ONLOAD
window.onscroll = function () {
    headerSticky()
    
};
window.onload = function () {
    headerSticky()
};

const mainHeader = document.querySelector('header')
var sticky = mainHeader.offsetTop;

//HEADER STICKY
function headerSticky() {
    if (window.pageYOffset > sticky) {
        mainHeader.classList.add("headerSticky");
    } else {
        mainHeader.classList.remove("headerSticky");
    }
}

function mobileMenuOpen(){
    const mobileMenus = document.querySelector('.mobile-menu-wrap')
    const body = document.querySelector('body')
    mobileMenus.classList.toggle("active");
    body.classList.toggle("body-lock");

}



let fired = false
window.addEventListener('scroll', () => {
    let counterWrap = document.querySelector('.main-counter')
    let counterWrapPosition = counterWrap.offsetTop
    let substractcounterWrap = counterWrapPosition - (counterWrapPosition * 0.05)
    let screenPosition = window.pageYOffset;
    if (substractcounterWrap < screenPosition && fired == false) {
        counterAnimationHandler() 
        fired = true;
    }
})

function counterAnimationHandler() {
    const counters = document.querySelectorAll('.counter-num ')
    counters.forEach(counter => {
    counter.innerText = '0' //set default counter value
    counter.dataset.count = 0;
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target') //define increase couter to it's data-target
        const count = +counter.dataset.count //define increase couter on innerText

        const increment = target / 300 // define increment as counter increase value / speed

        if (count < target) {
        const newCount = Math.ceil(count + increment);
        counter.dataset.count = newCount;
        counter.innerText = numberWithCommas(newCount);
        setTimeout(updateCounter, 1);
        } else {
        counter.innerText = numberWithCommas(target); //if default value is bigger that date-target, show data-target
        }
    }

    updateCounter() //call the function event
    })

    function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

//COUNTER ANIMATION HALDER -end