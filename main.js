addEventListener("load", (event) => {
    console.log('loaded');
    let bloomSections = document.querySelectorAll('.pre-bloom');
    bloomSections.forEach(el => {
        window.addEventListener("scroll", () => {
                bloom(el);
            });
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