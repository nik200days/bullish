 
$(document).ready(function () {

    // When the button is clicked make the lightbox fade in in the span of 1 second, hide itself and start the video
    $("#button").on("click", function () {
        $("#lightbox1").fadeIn(1000);
        $(this).hide();
        var videoURL = $('#video').prop('src');
        videoURL += "?autoplay=1";
        $('#video').prop('src', videoURL);
    });

    // When the close button is clicked make the lightbox fade out in the span of 0.5 seconds and show the play button
    $("#close-btn1").on("click", function () {
        $("#lightbox1").fadeOut(500);
        $("#button").show(250);
    });
});
 
$(document).ready(function () {

    // When the button is clicked make the lightbox fade in in the span of 1 second, hide itself and start the video
    $("#buttonplay").on("click", function () {
        $("#lightbox2").fadeIn(1000);
        $(this).hide();
        var videoURL = $('#video').prop('src');
        videoURL += "?autoplay=1";
        $('#video').prop('src', videoURL);
    });

    // When the close button is clicked make the lightbox fade out in the span of 0.5 seconds and show the play button
    $("#close-btn2").on("click", function () {
        $("#lightbox2").fadeOut(500);
        $("#buttonplay").show(250);
    });
});
 


$(document).ready(function () {
    $('.slider').slick({

        prevArrow: '<img src="assets/img/arrowright.png" class="slick-prev" alt="Previous">',
        nextArrow: '<img src="assets/img/arrowslide.png" class="slick-next" alt="Next">',

        dots: true, // Display dots for navigation
        infinite: true, // Looping

        speed: 300, // Transition speed
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once

        responsive: [
            {
                breakpoint: 1024, // Breakpoint for medium screens
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768, // Breakpoint for small screens
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
 