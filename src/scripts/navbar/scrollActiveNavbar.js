let sections = window.document.querySelectorAll('section');
let navlinks = window.document.querySelectorAll('nav .products .navlink');

window.onscroll = () => {
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    })

    navlinks.forEach((a) => {
        a.classList.remove('active');

        if (a.classList.contains(current)) {
            a.classList.add('active');
        }

        if (a.classList.contains('active')) {
            a.classList.remove('navlink_hover');
        }
        else {
            a.classList.add('navlink_hover');
        }
    })
}