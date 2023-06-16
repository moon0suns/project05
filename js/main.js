
$(function () {
    $('.main_slide').slick({
        arrows: false,
        fade: true,
        dots: true,

    });


    // 1 번호 클릭하면 그 사진 넘어오게 하는 것
    $('.main_visual .dots li').on('mouseenter', function () {
        let idx = $(this).index();
        console.log(idx);
        $('.main_slide').slick('slickGoTo', idx, true)
    });

    // 1 화살표
    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    })


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    // 2
    $('.pro_slide').slick({
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: true
    });


    $('.main_product .pro_arrows .left').on('click', function () {
        $('.pro_slide').slick('slickPrev')
    })
    $('.main_product .pro_arrows .right').on('click', function () {
        $('.pro_slide').slick('slickNext')
    })



    //3
    $('.tab_link li').on('click', function (event) {
        event.preventDefault();
        let idx = ($(this).index()) //0,1,2

        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.tab_content .con').eq(idx).addClass('on')
            .siblings().removeClass('on');

        console.log(event, event.target, event.currentTarget, $(this), $(this).index())

    });


    // 화살표
    $('.main_follow .arrows .left').on('click', function () {
        $('.follow_slide').slick('slickPrev');
    })

    $('.main_follow .arrows .right').on('click', function () {
        $('.follow_slide').slick('slickNext');
    })

    // 4  제품 슬라이드
    $('.follow_slide').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,

    });
    // const follow_slide = new Swiper('.follow_slide', {
    //     loop: true,
    //     slidesPerView: 2,
    //     spaceBetween: 30,
    //     // autoplay: {
    //     //     delay: 1000,
    //     //     disableOnInteraction: false,
    //     // },
    // })

    $('#f1').on('change', function () {
        const lnk = $(this).val();
        console.log(lnk, '')
        lnk && window.open(lnk);
    })



    //up
    $(function () {
        $('.to_top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 500)
        });
    });

    // 비쥬얼에 가면 사라짐
    $(window).on('scroll', function () {
        // 변수에 스크롤한 양을 저장
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 300) {
            // 스크롤 내린만큼 오면 나타나기
            $('.to_top').addClass('on');
        } else {
            $('.to_top').removeClass('on');
        }
    });

    // aos처럼 on이 붙이면 효과나타나는 것
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    })


});
