document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections[0].classList.add('active');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.7 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });
});