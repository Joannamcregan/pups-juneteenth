addEventListener("load", (event) => {
    let bloomSections = document.querySelectorAll('.pre-bloom');
    bloomSections.forEach(el => {
        window.addEventListener("scroll", () => {
                bloom(el);
            });
    })
    let slideDownSections = document.querySelectorAll('.pre-slide-down');
    slideDownSections.forEach(el => {
        window.addEventListener("scroll", () => {
            slideDown(el);
        })
    })
    let slideLeftItems = document.querySelectorAll('.pre-slide-left');
    slideLeftItems.forEach(el => {
        window.addEventListener("scroll", () => {
            slideLeft(el);
        })
    })
    let slideRightItems = document.querySelectorAll('.pre-slide-right');
    slideRightItems.forEach(el => {
        window.addEventListener("scroll", () => {
            slideRight(el);
        })
    })
})
const elementInView = (el, dividend = 1.75) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend);
};
function bloom(el){
    if (elementInView(el)){
        el.classList.add('bloom');
        el.classList.remove('pre-bloom');
    }
};
function slideDown(el){
    if (elementInView(el)){
        el.classList.add('slide-down');
        el.classList.remove('pre-slide-down');
    }
};
function slideLeft(el){
    if (elementInView(el)){
        el.classList.add('slide-left');
        el.classList.remove('pre-slide-left');
    }
};
function slideRight(el){
    if (elementInView(el)){
        el.classList.add('slide-right');
        el.classList.remove('pre-slide-right');
    }
};