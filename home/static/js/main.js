function centerLogo(){
  $('.logoContainer').css({
    position:'absolute',
    left: ($(window).width() - $('.logoContainer').outerWidth())/2,
    top: ($(window).height() - $('.logoContainer').outerHeight())/2
  });
}

//$(window).resize(centerLogo);
//$(document).ready(centerLogo);
$("#logoContainer #logo").on("load", function() {
//        centerLogo();
        console.log('logo is loaded');
});
