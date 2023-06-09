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
    'background-color': '#101010',
    'box-shadow': '0 0 1px 3px rgba(0, 0, 0, 0.3)',
    'transition': '.2s'
  });
  $('#roundednav').css({
    'box-shadow': 'unset',
    'padding': '0',
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