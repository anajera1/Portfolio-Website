$(window).on("load", function() {
    
    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    }); 
})




$(document).ready(function () {
    $('#slides').superslides({
        animation:'fade',
        play:5000, 
        pagination: false
    });
    
    var typed = new Typed(".typed", {
        strings: ["Newbie user experience designer", "San Francisco based", "Pizza enthusiast"],
        typeSpeed: 50,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
});

$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}