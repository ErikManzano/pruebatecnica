// Boton To-Top
const toTop = document.querySelector(".to-top");

window.addEventListener('scroll', (e) => {
    if(window.scrollY > 100) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
})

// Función para cerrar el menú al hacer clic en un enlace del menú
function closeMenu(event) {
    var toggleButton = document.querySelector('.navbar-toggler')
    var menu = document.querySelector('.navbar-collapse')
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        if (toggleButton.getAttribute('aria-expanded') === 'true') {
            toggleButton.click()
        }
    }
}
document.addEventListener('click', closeMenu)

// Animaciones Fade
window.addEventListener('load', function() {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
  
        for(var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if(elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    this.window.addEventListener("scroll", reveal);
    reveal();
})

// Resaltar el enlace activo
const navLinks = document.querySelectorAll('.navbar-nav a');

const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
            currentSectionIndex = index;
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
    });

    navLinks[currentSectionIndex].classList.add('active');
};
window.addEventListener('scroll', handleScroll);
