document.querySelector('.hamburger').onclick = showHideMenu
document.querySelector('.close').onclick = showHideMenu

function showHideMenu () {
    document.querySelector('.menu').classList.toggle('show')
}