

//tooltip code

const tooltips = document.querySelectorAll('.tt');

tooltips.forEach(t => {
    new bootstrap.Tooltip(t);

});


//Services Nav Button
function navigateToServices() {
    if (window.innerWidth > 768) {
        window.location.href = 'services.html#intro';
    } 
}


document.addEventListener('DOMContentLoaded', function() {
    const servicesNavBtn = document.getElementById('services-nav-btn');
    if (servicesNavBtn) {
        servicesNavBtn.addEventListener('click', navigateToServices);
    }
});



//Card Slide-Up on Load

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-row');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up-active'); 
                observer.unobserve(entry.target); // Stop observing the card after it becomes visible
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card); // Start observing each card
    });
});
