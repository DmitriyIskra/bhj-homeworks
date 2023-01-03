
document.addEventListener('scroll', e => {
    let element = document.elementFromPoint(2, window.innerHeight - 100);

    if(element.matches('.reveal')) {
        element.classList.add('reveal_active');
    };
});
