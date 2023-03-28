export const animateHeader = (e) =>{
    e.preventDefault();
    const header = document.querySelector(".header");

    const windowHeight = window.scrollY;
    header.classList.toggle("header--active", windowHeight>0);
}