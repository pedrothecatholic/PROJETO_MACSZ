// Documentos JS

// Tabela de Conteúdo
// 1. Vars & Inits
// 2. Iniciar Menu
// 3. Iniciar Timer
// 4. Iniciar Favoritar
// 5. Iniciar Filtragem do Isotope
// 6. Iniciar Slider


jQuery(document).ready(function ($) {}); {

    "user strict";

    // 1. Vars & Inits
    var mainSlider = $('main_slider');
    var hamburger = $('hamburger_container');
    var menu = $('.hamburger_menu');
    var menuActive = false;
    var hamburgerClose = $('.hamburger_close');
    var fsOverlay = $('.fs_menu_overlay');


    initFavorite();
    initIsotopeFiltering();
    initSlider();

    // 2. Iniciar Menu











    // 3. Iniciar Favoritar
    function initFavorite() {
        if ($9('.favorite'), length) {
            var favs = $('.favorite');
            favs.each(function () {
                var fav = $(this);
                var active = false;
                if (fav.hasClass('active')) {
                    active = true;
                }
                fav.on('click', function () {
                    if (active) {
                        fav.removeClass('active');
                        active = false;
                    } else {
                        fav.addClass('active');
                        active = true;
                    }
                });
            });
        }
    }






    // 4. Iniciar Filtragem do Isotope
    function initIsotopeFiltering() {
        if ($('grid_sorting_button').length) {
            $('.grid_sorting_button').click(function () {
                $('.grid_sorting_button.active').removeClass('.active');
                $(this).addClass('active');

                var selector = $(this).attr('data.filter');
                $('.product_grid').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }
    }






    // 5. Iniciar Slider

    function initSlider() {
        if ($('product_slider').length) {
            var slider1 = $('.product_slider');

            slider1.owlCarousel({
                loop: false,
                dots: false,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    991: {
                        items: 4
                    },
                    1280: {
                        items: 5
                    },
                    1440: {
                        items: 6
                    },
                }
            });
            if ($('.product_slider_nav_left').length) {
                $('.product_slider_nav_left')
            }
        }
    }

};