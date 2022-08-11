// TOOLTIP
function toolTipOpen(event){
    const targeted = event.currentTarget
    const toolTipWrap = targeted.parentNode;
    toolTipWrap.classList.toggle('on')
    toolTipWrap.addEventListener('mouseleave', function (){
        toolTipWrap.classList.remove('on')
    })
}

//WINDOW ONSCROLL AND ONLOAD
window.onscroll = function () {
    headerSticky()
    windowhalf_visible()
    
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
