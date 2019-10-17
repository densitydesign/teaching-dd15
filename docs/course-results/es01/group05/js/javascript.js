/** loader **/
jQuery(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $('#preloader').fadeOut('slow', function () {
            });
        },4000);
        setTimeout(function(){
            $('#loader').fadeOut('slow', function () {
            });
        },3500);

    });  
});

/** glitch effect **/
function glitch() {setInterval(function (){
  var eLtext = $('.textglitch').text(),
      eLchild = $('.textglitch').find('.textglitch-link');
  console.log(eLchild);
  eLchild.attr('data-content', eLtext);
  eLchild.toggleClass('blur');
  $('.textglitch').toggleClass('active')}, 2500);
  setTimeout (function (){
  var eLtext = $('.textglitch').text(),
      eLchild = $('.textglitch').find('.textglitch-link');
  console.log(eLchild);
  eLchild.attr('data-content', eLtext);
  eLchild.toggleClass('blur');
  $('.textglitch').toggleClass('disactive');
}, 3000);
};


setInterval(glitch, 4800);

/** glitch texts **/
function glitch1() {
    $('.group').css('opacity', '0');
    $('.text1').css('opacity', '0');
    $('.text2').css('opacity', '0');
    $('.descriptionimag').css('opacity', '0');
    setTimeout(function(){
    $('.group').css('opacity', '1');
    $('.text1').css('opacity', '1');
    $('.text2').css('opacity', '1');
    $('.descriptionimag').css('opacity', '1');
    },2000)
}

setInterval(glitch1, 180000);