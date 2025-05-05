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

    document.querySelectorAll('[data-url]').forEach(el => {
        el.addEventListener('click', (event) => {
            event.stopPropagation();
            const url = el.getAttribute('data-url');
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

    const searchBox = document.querySelector('.search-box');
    const searchInput = document.getElementById("searchInput");
    const statusFilter = document.getElementById("statusFilter");
    const tipoFilter = document.getElementById("tipoFilter");

    searchBox.addEventListener('click', () => {
        searchInput.focus();
    });

    function filterCards() {
        const searchText = searchInput.value.toLowerCase();
        const status = statusFilter.value;
        const tipo = tipoFilter.value;

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardStatus = card.getAttribute("data-status");
            const cardTipo = card.getAttribute("data-tipo");

            const matchText = cardText.includes(searchText);
            const matchStatus = status === "todos" || cardStatus === status;
            const matchTipo = tipo === "todos" || cardTipo === tipo;

            card.style.display = (matchText && matchStatus && matchTipo) ? "flex" : "none";
        });
    }

    searchInput.addEventListener("input", filterCards);
    statusFilter.addEventListener("change", filterCards);
    tipoFilter.addEventListener("change", filterCards);
});