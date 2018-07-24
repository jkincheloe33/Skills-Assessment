$(document).ready(function () {

    // ----------------------------------------------
    //  Randomly selects a hero image from an array
    // ----------------------------------------------

    let hero = [
        "./assets/HERO 1.jpg",
        "./assets/HERO 2.jpg",
        "./assets/HERO 2.jpg"
    ];
    let size = hero.length;
    let i = Math.floor(size * Math.random());
    document.getElementById('hero-image').src = hero[i];

    // ----------------------------------------
    //  Animation for collage and info sections
    // ----------------------------------------
    let scroll = 0;

    $(window).scroll(() => {

        let scrollY = window.scrollY;
        if (scroll > 120 && scrollY > 120) {
            return;
        } else if (scroll <= 120 && scrollY <= 120) {

            return;
        }

        scroll = scrollY;
        if (scroll > 120) {
            $('#collageOne').addClass('fadeInUp load');
            $('#collageTwo').addClass('fadeInLeft load');
            $('#collageThree').addClass('fadeInLeft load');
            $('#collageFour').addClass('fadeInDown load');
            $('#collageFive').addClass('fadeInUp load');
            $('.info-title').addClass('slideInRight load');
            $('.info-body').addClass('slideInRight load');

        } else {
            $('#collageOne').removeClass('fadeInUp load');
            $('#collageTwo').removeClass('fadeInLeft load');
            $('#collageThree').removeClass('fadeInLeft load');
            $('#collageFour').removeClass('fadeInDown load');
            $('#collageFive').removeClass('fadeInUp load');
            $('.info-title').removeClass('slideInRight load');
            $('.info-body').removeClass('slideInRight load');
        }

    });
});
