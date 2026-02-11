document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-surface/90', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-gray-800');
            navbar.classList.remove('py-5');
            navbar.classList.add('py-3');

        } else {
            navbar.classList.remove('bg-surface/90', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-gray-800');
            navbar.classList.remove('py-3');
            navbar.classList.add('py-5');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');

            // Toggle icon
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });

        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');

                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Select elements to animate
    document.querySelectorAll('.group, .space-y-8 > div').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

    // Booking Form Handler
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const destination = document.getElementById('destination').value;
            const message = document.getElementById('message').value;

            // Format WhatsApp Message
            const text = `*New Booking Inquiry*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Date:* ${date}%0A*Destination:* ${destination}%0A*Message:* ${message}`;

            // Open WhatsApp
            window.open(`https://wa.me/94772401258?text=${text}`, '_blank');
        });
    }
});
