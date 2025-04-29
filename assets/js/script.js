'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();

            document.querySelectorAll('.dropdown-content.show').forEach(openDropdown => {
                if (!openDropdown.previousElementSibling.isSameNode(button)) {
                    openDropdown.classList.remove('show');
                }
            });

            const dropdownContent = button.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    document.querySelectorAll('.dropdown-content .br-item').forEach(span => {
        span.addEventListener('click', (event) => {
            event.stopPropagation();
            const url = span.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });

    window.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    });
});