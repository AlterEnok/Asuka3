document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const body = document.body;

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('_active'); // Активирует мобильное меню
            menuIcon.classList.toggle('_active'); // Анимация кнопки бургер-меню
            body.classList.toggle('no-scroll'); // Блокирует прокрутку страницы
        });
    }
});