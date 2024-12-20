const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Auto-sliding for the slider section
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    showTestimonials();
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                if (target == 2000 || target == 50) {
                    counter.innerText = target + '+'; // Add '+' to 2000 and 50
                } else if (target == 99.9) {
                    counter.innerText = target + '%'; // Add '%' to 99.9
                } else {
                    counter.innerText = target;
                }
            }
        };

        updateCount();
    });
});

//testimonials//
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    const totalTestimonials = testimonials.length;
    const interval = 5000; // 5 seconds

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        showTestimonial(currentIndex);
    }

    // Show the first testimonial initially
    showTestimonial(currentIndex);

    // Set interval for auto sliding
    setInterval(nextTestimonial, interval);
});

