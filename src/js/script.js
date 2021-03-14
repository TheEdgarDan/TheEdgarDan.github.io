$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron_left_solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron_right_solid.png"></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ]
    });
});