$(document).ready(function () {

    let scroll = 0;

    $(window).scroll(() => {

        let scrollY = window.scrollY;
        if (scroll > 120 && scrollY > 120) {
            return;
        } else if (scroll <= 120 && scrollY <= 120) {

            return;
        }

        scroll = scrollY;
        // console.log(scroll);
        if (scroll > 120) {
            $('#collageOne').addClass('fadeInUp load');
            $('#collageTwo').addClass('fadeInLeft load');
            $('#collageThree').addClass('fadeInLeft load');
            $('#collageFour').addClass('fadeInDown load');
            $('#collageFive').addClass('fadeInUp load');

        } else {
            $('#collageOne').removeClass('fadeInUp load');
            $('#collageTwo').removeClass('fadeInLeft load');
            $('#collageThree').removeClass('fadeInLeft load');
            $('#collageFour').removeClass('fadeInDown load');
            $('#collageFive').removeClass('fadeInUp load');
        }

    });

});
