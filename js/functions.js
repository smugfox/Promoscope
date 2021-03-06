$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

  $('.back-bird').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
  });

  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }

  // If scroll position is equal to the large window offset top minus 
  // the height of the window
  if(wScroll > $('.large-window').offset().top - $(window).height()) {
    $('.large-window').css({'background-position':'center ' + (wScroll - $('.large-window').offset().top) + 'px'});

    //When periscope hits the top of the window, the opacity will be 1, before then, it will be 0
    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5)

    $('.window-tint').css({'opacity' : opacity})

  }

});
