(function ($) {
    $(function () {

        $('.parallax').parallax();
        $('.menu').pushpin();
        $('.scrollspy').scrollSpy();
        $('.carousel').carousel({
            shift: 10,
            padding: 100,
            numVisible: 3,
            indicators: true
        });
        $('.carousel.carousel-slider').carousel({
            // fullWidth: true,
            indicators: true
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space

