jQuery(document).ready(function ($) {
    "use strict";

    var mainSlider = $(".main_slider");
    var hamburguer = $(".hamburguer_container");
    var menu = $(".hamburguer_menu");
    var menuActive = false;
    var hamburguerClose = $(".hamburguer_close");
    var fsOverlay = $(".fs_menu_overlay");

    initFavorite();
    initIsotopeFiltering();
    initTimer();

    function initTimer() {
        if ($(".timer").length) {
            var target_date = new Date("Dec 18, 2021").getTime();

            // var date = new Date();
            // date.setDate(date.getDate() + 3);
            // var target_date = date.getTime();

            var days, hours, minutes, seconds;
            var d = $("#day");
            var h = $("#hour");
            var m = $("#minute");
            var s = $("#second");

            setInterval(function () {
                var current_date = new Date().getTime();
                var seconds_left = (target_date - current_date) / 1000;

                days = parseInt(seconds_left / 86400);
                seconds_left = seconds_left % 86400;

                hours = parseInt(seconds_left / 3600);
                seconds_left = seconds_left % 3600;

                minutes = parseInt(seconds_left / 60);
                seconds = parseInt(seconds_left % 60);

                d.text(days);
                h.text(hours);
                m.text(minutes);
                s.text(seconds);
            }, 1000);
        }
    }

    function initFavorite() {
        if ($(".favorite").length) {
            var favs = $(".favorite");

            favs.each(function () {
                var fav = $(this);
                var active = false;

                if (fav.hasClass("active")) {
                    active = true;
                }

                fav.on("click", function () {
                    if (active) {
                        fav.removeClass("active");
                        active = false;
                    } else {
                        fav.addClass("active");
                        active = true;
                    }
                });
            });
        }
    }

    function initIsotopeFiltering() {
        if ($(".grid_sorting_button").length) {
            $(".grid_sorting_button").click(function () {
                $(".grid_sorting_button.active").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".product-grid").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: "linera==",
                        queue: false,
                    },
                });
                return false;
            });
        }
    }
});