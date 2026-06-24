document.addEventListener('DOMContentLoaded', () => {
var swiperFv = new Swiper('.fv_swiper', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    }
});

function animateFv(swiper) {

    document.querySelectorAll('.fv_swiper .swiper-slide img').forEach(img => {
        img.style.animation = 'none';
    });

    const imgs = swiper.slides[swiper.activeIndex].querySelectorAll('img');

    imgs.forEach(img => {
        img.offsetHeight; // reflow
        img.style.animation = 'fvSlideIn 1.2s cubic-bezier(.22,1,.36,1) forwards';
    });
}

    var sec05item = new Swiper('.sec05-item_swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 10000, 
            disableOnInteraction: false, 
        },
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    if( window.innerWidth < 767){
        var sec05 = new Swiper('.sec05_swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 10000, 
                disableOnInteraction: false, 
            },
            navigation: {
                nextEl: '.swiper-button-next-sec05',
                prevEl: '.swiper-button-prev-sec05',
            },
            pagination: {
                el: '.swiper-pagination05',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' +
                        ('0' + (index + 1)).slice(-2) +
                        '</span>';
                }
            },

            on: {
                init: updateArrowsec05,
                slideChange: updateArrowsec05
            }
        });
        function updateArrowsec05(swiper) {
            if (swiper.realIndex === 0) {
                $('.sec05-prev').addClass('is-first');
            }else{
                $('.sec05-prev').removeClass('is-first');
            }

            if (swiper.realIndex === 3) {
                $('.sec05-next').addClass('is-last');
            }else{
                $('.sec05-next').removeClass('is-last');
            }
        }
    }

    var sec02 = new Swiper('.sec02_swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        autoHeight: true,
        loop: true,

        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.sec02-next',
            prevEl: '.sec02-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' +
                    ('0' + (index + 1)).slice(-2) +
                    '</span>';
            }
        },

        on: {
            init: updateArrow,
            slideChange: updateArrow
        }
    });

    function updateArrow(swiper) {
        if (swiper.realIndex === 0) {
            $('.sec02-prev').addClass('is-first');
        }else{
            $('.sec02-prev').removeClass('is-first');
        }

        if (swiper.realIndex === 2) {
            $('.sec02-next').addClass('is-last');
        }else{
            $('.sec02-next').removeClass('is-last');
        }
    }


      
    
});


document.addEventListener("DOMContentLoaded", () => {
    const sticky = document.querySelector(".fixbutton");
    const firstCTA = document.querySelector(".cta-first");
    const topPage = document.querySelector(".pagetop");

    if (!sticky || !firstCTA || !topPage) return;

    const show = () => {
        sticky.classList.add("is-show");
        topPage.classList.add("is-show");
    };

    const hide = () => {
        sticky.classList.remove("is-show");
        topPage.classList.remove("is-show");
    };

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const ctaBottom = firstCTA.offsetTop + firstCTA.offsetHeight;

        if (scrollY > 100) {
            show();
        } else {
            hide();
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const $firstItem = $('.faq-item[data-id="q1"]');
    $firstItem.addClass("active");
    $firstItem.find(".faq-answer").show();

    $(".faq-question").on("click", function () {
        const $item = $(this).closest(".faq-item");
        $(".faq-item").not($item).removeClass("active").find(".faq-answer").slideUp();
        $item.toggleClass("active");
        $item.find(".faq-answer").slideToggle();
    });
});


document.querySelectorAll('.sec07-item-btn p').forEach(btn => {
    btn.addEventListener('click', function () {

        const parent = this.parentElement;
        parent.querySelectorAll('p').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');

        const activeCount = document.querySelectorAll('.sec07-item-btn p.active').length;

        if (activeCount === 3) {
            document.querySelector('.sec07-result-txt span').textContent = '12,345';
        }
    });
});

$(window).on('load', function() {
  wowloader();
});

function wowloader() {
   new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: true
  }).init();
}