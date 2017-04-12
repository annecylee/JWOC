$(function() {

  $(".menu").click(function() {
    $(".navbar-nav").toggle();

  });

  $(window).click(function(){
    $(".navbar-nav").hide();
  });

  $(window).scroll(function(){
    $(".navbar-nav").hide();
  });

  $('.menu').click(function(event){
    event.stopPropagation();
});

});
