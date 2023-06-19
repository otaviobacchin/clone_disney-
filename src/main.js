document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const actualPosition = window.scrollY;

        if (actualPosition < heroHeight) {
            hideHeaderElements();
        } else {
            showHeaderElements();
        }
    })

    // Seção de atrações, programação das abas
    for (let i = 0; i< buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideAllTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveButton();
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Seção FAQ, Aaccordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer);
    }
})

function hideHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function removeActiveButton() {
    const buttons = document.querySelectorAll(`[data-tab-button]`);

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function openOrCloseAnswer(elemento) {
    const openClass = 'faq__questions__item--is-open';
    const fatherElement = elemento.target.parentNode;

    fatherElement.classList.toggle(openClass);
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}