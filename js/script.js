$(function () {
    var header = $('header');

    $(window).scroll(function (e) {
        if (header.offset().top !== 0) {
            if (!header.hasClass('shadow')) {
                header.addClass('shadow');
            }
        } else {
            header.removeClass('shadow');
        }
    });

    $(".return-top").hide(); // 탑 버튼 숨김

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) { // 스크롤 내릴 표시
            $('.return-top').fadeIn();
        } else {
            $('.return-top').fadeOut();
        }
    });

    $('.return-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 200); // 탑 이동 스크롤 속도
        return false;
    });

    $('.hd_menu').click(function () {
        $('.ham_bg').show();
        $('.ham_wrap').addClass('ham_on');
    });
    $('.ham_bg').click(function () {
        $('.ham_bg').hide();
        $('.ham_wrap').removeClass('ham_on');
    });
});