const hamburger = document.querySelector(".header__nav--hamburger")
const aside = document.querySelector(".header__aside")

$(hamburger).on('click', function () {
    $(hamburger).toggleClass("is-active")
    $(aside).toggleClass("header__aside--active")
});