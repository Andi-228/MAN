window.onload = function () {
    const menuButton = document.querySelector('.nav__burger');
    const menuItem = document.querySelector('.burger-content');
    let clicked = false;
    console.log('script ready')

    menuButton.addEventListener('click', () => {
        (!clicked) ? menuItem.classList.add('show-f') : menuItem.classList.remove('show-f');
        return clicked = !clicked;
    })
};