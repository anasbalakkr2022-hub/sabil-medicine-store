// script.js for SABIL MEDICINE STORE

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.menu');

mobileMenuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a.scroll-link');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form validation
const contactForm = document.querySelector('#contact-form');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

contactForm.addEventListener('submit', (event) => {
    let valid = true;
    if (!emailInput.value.includes('@')) {
        valid = false;
        alert('Please enter a valid email address.');
    }
    if (messageInput.value.trim() === '') {
        valid = false;
        alert('Message cannot be empty.');
    }
    if (!valid) {
        event.preventDefault();
    }
});

// Interactive features (example: button click)
const exampleButton = document.querySelector('.example-button');
exampleButton.addEventListener('click', () => {
    alert('Button clicked!');
});