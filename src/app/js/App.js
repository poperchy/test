$('.slider__wrap').slick({
    autoplay: false,
    arrows: false,
    dots: true
});

$(document).ready(function () {
    let formBtn = document.querySelector('.form__btn');
    let modal = document.querySelector('.modal');
    let closeBtn = document.querySelector('.modal__close');
    let body = document.querySelector('body');



    formBtn.addEventListener('click', function () {
        modal.style.display = "block";
        body.style.overflow = "hidden";
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = "none";
        body.style.overflow = "auto";
    });

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            body.style.overflow = "auto";
        }
    };
});
var formCalc = document.querySelectorAll("#form-wrap form:not(:first-child)");
var tabLinks = document.getElementsByClassName("calculator__btn");
function windowSelection(evt, nameForms) {

    for (var i = 0; i < formCalc.length; i++) {
        formCalc[i].style.display = "none";
    }

    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" calculator__btn--active", "");
    }

    document.querySelector('.calculator__form').style.display = "none";
    document.getElementById(nameForms).style.display = "block";
    evt.currentTarget.className += " calculator__btn--active";
}