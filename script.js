// ################# Mobile Menu #################

const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mainNav = document.getElementById('mainNav');

menuBtn.addEventListener('click', (event) => {
    mainNav.classList.add('show')
});

mainNav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' || event.target.tagName === 'I') {
        mainNav.classList.remove('show')
    }
});
