$(function() {
    $('.products-popular__filter-btn').on('click', function(){
      $('.products__aside').slideToggle();
    });

    $('.footer-top__title').on('click', function(){ //сворачивает список под заголовком
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });

    $('.header-bottom__burger').on('click', function(){
       $('.header-bottom__burger').toggleClass('header-bottom__burger--active');
      $('.header-bottom__menu').toggleClass('header-bottom__menu--active');
     
    });

     $('.system__kits-link').on('click', function(e) {
     e.preventDefault();
    $('.system__kits-link').removeClass('system__kits-link--active');
    $(this).addClass('system__kits-link--active');

    $('.system__kits-items').removeClass('system__kits-items--active');
    $($(this).attr('href')).addClass('system__kits-items--active');

    
  });


    $('.system__tabs-btn').on('click', function(e) {
     e.preventDefault();
    $('.system__tabs-btn').removeClass('system__tabs-btn--active');
    $(this).addClass('system__tabs-btn--active');

    $('.system__tabs-item').removeClass('system__tabs-item--active');
    $($(this).attr('href')).addClass('system__tabs-item--active');

    
  });


    $('.products-popular__btn').on('click', function(){
          $('.products-popular__btn').removeClass('products-popular__btn--active');
          $(this).addClass('products-popular__btn--active');
        });


    $('.products-popular__btn-list').on('click', function(){
      $('.products-popular__bottom').addClass('products-popular__bottom--nogrid');
      $('.products-popular__item').addClass('products-popular__item--list');
    });

    $('.products-popular__btn-grid').on('click', function(){
      $('.products-popular__bottom').removeClass('products-popular__bottom--nogrid');
      $('.products-popular__item').removeClass('products-popular__item--list');
    });

   $('.descr-card__input').styler();

  $('.top-slider__items').slick({
    arrows: false,
    dots: true,
    fade: true,
    appendDots: $('.reviws__dots')
  })


});