const sideMenue = document.querySelector('#sideMenue');
const navBar = document.querySelector("nav")
const navLinks = document.querySelector("nav ul")

function openMenu() {
    sideMenue.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenue.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
    if(scrollY > 50){
navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
    }
})