ActionJS = {
  Init: function () {
    ActionJS.sliderTestimonials()
    ActionJS.showMenuMobile()
    ActionJS.scrollFixedMenu()
    ActionJS.controlStyleShowing()
    ActionJS.clickChangeImageProduct()
  },
  cartEffection: function(){
    $('.add-to-cart-btn').on('click',function(){
      var button = $(this);
      var cart = $('#header .logo-menu .cart');
      var cartTotal = cart.attr('data-totalitems');
      var newCartTotal = parseInt(cartTotal) + 1;

      button.addClass('sendtocart');
      setTimeout(function(){
        button.removeClass('sendtocart');
        cart.addClass('shake').attr('data-totalitems', newCartTotal);
        setTimeout(function(){
          cart.removeClass('shake');
        },500)
      },1000)
    })
  },
  sliderTestimonials: function () {
    if (window.matchMedia('(max-width: 991px)').matches){
      $('#testimonials .slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<img class="img-fluid arrow-left" src="images/left-arrow.svg" />',
        nextArrow: '<img class="img-fluid arrow-right" src="images/left-arrow.svg" />',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      })
    }
  },
  showMenuMobile: function () {
    $('.control__menu').on('click', function () {
      $(this).toggleClass('show')
      $('.menu-mobile').toggleClass('show')
      $('body').toggleClass('is-show-menu')
    })
  },
  scrollFixedMenu: function () {
    $(window).scroll(function () {
      let pos_body	= window.pageYOffset
      if(pos_body > 20){
        $('#header').addClass('scrolled')
      }else {
        $('#header').removeClass('scrolled')
      }
    })
  },
  controlStyleShowing: function (){
    $('.showing .list').on('click', function (){
      $('#products').addClass('list-style')
      $(this).addClass('active')
      $('.showing .grid').removeClass('active')
    })
    $('.showing .grid').on('click', function (){
      $('#products').removeClass('list-style')
      $(this).addClass('active')
      $('.showing .list').removeClass('active')
    })
  },
  clickChangeImageProduct: function(){
    $('#product-details-page #product-general .img-product .gallery img').on('click', function(){
      $('#product-details-page #product-general .img-product .gallery img').removeClass('active')
      $(this).addClass('active')
      var src = $(this).attr('src');
      $('#product-details-page #product-general .img-product .img img').attr('src',src);
    });
  },
}
ActionJS.Init()
