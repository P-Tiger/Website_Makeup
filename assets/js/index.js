//  show Search Mobile
$(document).ready(function () {
    $('#logout').on('click', function () {
        let avatar = $(this).parent().parent();
        let logInAndRegister = $('.header__nav-item.header__nav-item--bold')
        if (avatar.attr('id') === 'show') {
            avatar.attr('id', 'hide');
            logInAndRegister.attr('id', 'show');
        }
    })

    $('.header__nav-item--sparate').on('click', function () {
        $('.modal').css('display', 'flex');
        $('.register').attr('id', '');
    })

    $('.header__nav-item--login').on('click', function () {
        $('.modal').css('display', 'flex');
        $('.login').attr('id', '');
    })

    $('.auth-form__switch-btn--login').on('click', function () {
        $('.register').attr('id', 'hide');
        $('.login').attr('id', '');
    })

    $('.auth-form__switch-btn--register').on('click', function () {
        $('.register').attr('id', '');
        $('.login').attr('id', 'hide');
    })

    $('.auth-form__controll-back').on('click', function () {
        $('.modal').css('display', 'none');
        $('.login').attr('id', 'hide');
        $('.register').attr('id', 'hide');
    })
})

function showSearch() {
    let clickSearch = $('#click_search');

    if (clickSearch.css('display') === 'none') {
        clickSearch.css('display', 'flex');
    } else {
        clickSearch.css('display', 'none');
    }
}
