// JavaScript for Dropdown Menu and Smooth Scrolling

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dropdown menu toggle
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('mouseenter', () => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdownMenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdownMenu.style.display = 'none';
    });
});

// JavaScript to toggle the mobile navigation menu

function toggleNav() {
    document.querySelector(".mobile-nav").classList.toggle("active");
}




function printpage() {
    window.print();
}

function reload() {
    location.reload();
}
