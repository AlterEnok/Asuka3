document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('_active'); // Активирует мобильное меню
            menuIcon.classList.toggle('_active'); // Анимация кнопки бургер-меню
        });
    }
});