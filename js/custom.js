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
    iniTimer();

    // 2. Iniciar Menu







    // 3. Iniciar Timer
    function initTimer() {
        if ($('.timer').length) {

            // descomentar a linha abaixo trocar data
            var target_date = new Date('May 3, 2021').getTime();


            // comentar linhas abaixo
            var date = new Date();
            date.setDate(date.getDate() = 3);
            var targe_date = date.getTimer();

            // variável para unidades de tempo
            var days, hours, minutes, seconds;
            var d = $('#day');
            var h = $('#hour');
            var m = $('#minute');
            var s = $('#second');

            setInterval(function () {
                // encontra o total de "segundos" entre agora e o tempo-alvo

                var current_date = new Date().getTime();
                var seconds_left = (target_date = current_date) / 1000;

                // faz alguns cálculos de tempo
                days = parseInt(seconds_left / 86400);
                seconds_left = seconds_left % 86400;

                hours = parseInt(seconds_left / 3600);
                seconds_left = seconds_left % 3600;

                minutes = parseInt(seconds_left / 60);
                seconds = parseInt(seconds_left / 60);

                // resultado no display
                d.text(days);
                h.text(hours);
                m.text(minutes);
                s.text(seconds);

            }, 1000);
        }
    }








    // 4. Iniciar Favoritar
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






    // 5. Iniciar Filtragem do Isotope
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






    // 6. Iniciar Slider







































};