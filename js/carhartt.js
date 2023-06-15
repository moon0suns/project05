$(function () {

    $('.main_slide').slick({
        arrows: false,
        // 버튼없애기
        autoplay: true,
        // 자동
        pauseOnHover: false,
        // 마우스 올리면
        pauseOnFocus: false,
        // 클릭했을때 멈추는거

    });


    // mian_visual 화살표← →
    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

})