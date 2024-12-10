$(document).ready(function() {
    $('#homenav').hover(function() {
        $('#contain').addClass('home-bg');
    }, function() {
        $('#contain').removeClass('home-bg');
    });

    $('#forumnav').hover(function() {
        $('#contain').addClass('forum-bg');
    }, function() {
        $('#contain').removeClass('forum-bg');
    });
});

//menu
$(document).ready(function() {
  updateNavbarOnScroll();
  restoreNavbarPosition();
});

function boxNavBar() {
  $('#boxnavbar').css({
    'padding': '0',
    'background-color': 'rgba(0, 0, 0, 0.8',
    'box-shadow': '0 0 1px 3px rgba(0, 0, 0, 0.3)',
    'transition': '.2s'
  });
  $('#roundednav').css({
    'box-shadow': 'unset',
    'padding': '0',
    'transition': '.2s'
  });
  $('#glossy').css({
    'backdrop-filter': 'none',
    'transition': '.2s'
  });
  $('#logo').css({
    'font-size': '20px'
  });  
  $('.header-right').css({
    'margin-top': '0'
  });
}

function roundedNav() {
  $('#boxnavbar').css({
    'padding': '30px 10px',
    'background-color': 'transparent',
    'box-shadow': 'unset',
    'transition': '.2s'
  });
  $('#roundednav').css({
    'box-shadow': '0 0 1px 3px rgba(0, 0, 0, 0.3)',
    'padding': '10px',
    'transition': '.2s'
  });
  $('#glossy').css({
    'backdrop-filter': 'blur(60px) saturate(100%)',
    'transition': '.2s'
  });
  $('#logo').css({
    'font-size': '30px'
  });
  $('.header-right').css({
    'margin-top': '10px'
  });
}

function updateNavbarOnScroll() {
  window.onscroll = function() {scrollFunction()};

  function scrollFunction(){
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
          localStorage.setItem("roundednav", "false");
          boxNavBar();
      }else{
          localStorage.setItem("roundednav", "true");
          roundedNav();
      }
  }
}

function restoreNavbarPosition() {
  let navSate = localStorage.getItem("roundednav");
  if(navSate!=null){
      if(navSate=='false'){
          boxNavBar();
      }else{
          roundedNav();
      }
  }
}

$(document).ready(function(){
  // Initialiser la visibilité à "hidden"
  $('.go_top').css('visibility', 'hidden');
  // Condition d'affichage du bouton
  $(window).scroll(function(){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
      $('.go_top').css('visibility', 'visible');
    }
    else{
      $('.go_top').css('visibility', 'hidden');
    }
  });
  // Evenement au clic
  $('.go_top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
});
