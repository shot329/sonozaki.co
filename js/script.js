// ローディング時にlogoの表示
$(window).on('load',function(){
  $("#splash").delay(2000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(2800).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

// ハンバーガーメニュー
$(function() {
  // ハンバーガーメニューをクリックした時 //
  $('.nav_toggle').on('click', function() {
    $('.nav_toggle, .header-nav, .site-logo').toggleClass('show');
    $('body').toggleClass('noscroll');
  });
  // ナビボタン、サイトロゴをクリックした時 //
  $('.nav-item, .site-logo').on('click', function() {
    $('.nav_toggle, .header-nav').removeClass('show');
    $('body').removeClass('noscroll');
  });
});

// スライダー
$(function() {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
  });
});

// ヘッダースクロール
$(function() {
  const fvHeight = $('.fv').height();
  $(window).scroll(function() {
    if ($(this).scrollTop() > fvHeight) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });
});

// wow.jsの着火
$(function() {
  new WOW().init();
});