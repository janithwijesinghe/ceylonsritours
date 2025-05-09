$(document).ready(function() {

  /*----------------------------------------------------*/
  /* MOBILE DETECT FUNCTION
  /*----------------------------------------------------*/
  var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
      
  };

  /*----------------------------------------------------*/
  // PARALLAX CALLING
  /*----------------------------------------------------*/
  $(window).bind('load', function () {
    parallaxInit();
  });
  function parallaxInit() {
    testMobile = isMobile.any();

    if (testMobile == null)
    {
      $('.parallax .bg1').addClass("bg-fixed").parallax("50%", 0.5);
      $('.parallax .bg2').addClass("bg-fixed").parallax("50%", 0.5);
    }
  }
  parallaxInit();

  /*----------------------------------------------------*/
  // Appear
  /*----------------------------------------------------*/
  $('.animated').appear(function() {
    // console.log("111111111111");
      var elem = $(this);
      var animation = elem.data('animation');
      if ( !elem.hasClass('visible') ) {
        var animationDelay = elem.data('animation-delay');
        if ( animationDelay ) {
          setTimeout(function(){
              elem.addClass( animation + " visible" );
          }, animationDelay);
        } else {
          elem.addClass( animation + " visible" );
        }
      }
  });

  /*----------------------------------------------------*/
  // carouFredSel.
  /*----------------------------------------------------*/
  var o = $('#slider .carousel.main ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      // prev: '.slider_prev',
      // next: '.slider_next',
      pagination: '.slider_pagination',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '1000',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 1
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  }

  var o = $('#popular .carousel.main ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      // prev: '.popular_prev',
      // next: '.popular_next',
      pagination: '.popular_pagination',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '520',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 3
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  }


  var o = $('.sm_slider1 .carousel.main ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      prev: '.sm_slider1 .sm_slider_prev',
      next: '.sm_slider1 .sm_slider_next',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '1000',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 1
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  }

  var o = $('.sm_slider2 .carousel.main ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      prev: '.sm_slider2 .sm_slider_prev',
      next: '.sm_slider2 .sm_slider_next',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '1000',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 1
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  }

  var o = $('.sm_slider3 .carousel.main ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      prev: '.sm_slider3 .sm_slider_prev',
      next: '.sm_slider3 .sm_slider_next',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '1000',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 1
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  }

  var o = $('.sm_slider4 .carousel.main ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      prev: '.sm_slider4 .sm_slider_prev',
      next: '.sm_slider4 .sm_slider_next',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '1000',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 1
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  }

  var o = $('#sl1 .carousel.main ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      prev: '.sl1_prev',
      next: '.sl1_next',
      pagination: '.sl1_pagination',
      width: '100%',
      scroll: {
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '2000',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 1
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  }


  $(window).bind("resize",updateSizes_vat).bind("load",updateSizes_vat);
  function updateSizes_vat(){
    $('#slider .carousel.main ul').trigger("updateSizes");
    $('#popular .carousel.main ul').trigger("updateSizes");
    $('.sm_slider1 .carousel.main ul').trigger("updateSizes");
    $('.sm_slider2 .carousel.main ul').trigger("updateSizes");
    $('.sm_slider3 .carousel.main ul').trigger("updateSizes");
    $('.sm_slider4 .carousel.main ul').trigger("updateSizes");
    $('#sl1 .carousel.main ul').trigger("updateSizes");

  }
  updateSizes_vat();

  // touchTouch
  var o = $('.thumb-isotope .thumbnail a');
  if (o.length > 0) {
    o.touchTouch();
  }

  /*----------------------------------------------------*/
  // Superslides
  /*----------------------------------------------------*/
  // var height = $(window).height() - 150;
  // $('#home').height(height);

  var o = $('#slides');
  if (o.length > 0) {
    o.superslides({
      play: 7000,
      animation: 'fade', // slide
      pagination: true,
      inherit_height_from: '#home',
    });
  }


  // Select2.
  $('.select2').select2({
    // containerCss: ".eeeeeee",
    minimumResultsForSearch: Infinity,

  });

  // datapicker
  $( ".datepicker" ).datepicker({
     orientation: "top"
  });

  // Tabs.
  var index = $('.tabs1 .tabs_tabs ul').find(".active").index();
  $( ".tabs1" ).tabs({
    active: index
  });

  var index = $('.tabs2 .tabs_tabs ul').find(".active").index();
  $( ".tabs2" ).tabs({
    active: index
  });

  var index = $('.tabs3 .tabs3_tabs ul').find(".active").index();
  $( ".tabs3" ).tabs({
    active: index
  });





  /*----------------------------------------------------*/
  // Appear
  /*----------------------------------------------------*/
  $('.animated').appear(function() {
    // console.log("111111111111");
      var elem = $(this);
      var animation = elem.data('animation');
      if ( !elem.hasClass('visible') ) {
        var animationDelay = elem.data('animation-delay');
        if ( animationDelay ) {
          setTimeout(function(){
              elem.addClass( animation + " visible" );
          }, animationDelay);
        } else {
          elem.addClass( animation + " visible" );
        }
      }
  });

  // Animate number
  $('.animated-distance').appear(function() {
    var elem = $(this);
    var b = elem.data('num');
    var d = elem.data('duration');
    var animationDelay = elem.data('animation-delay');
    if ( !animationDelay ) { animationDelay = 0; }
    elem.find('span').text("0" + '%');

    setTimeout(function(){
      elem.animate({ num: b }, {
        duration: d,
        // easing: 'easeOutExpo',
        step: function (num){
          a = (num).toFixed(0) + '%';
          elem.find('span').text(a);
          elem.css("width", a);
        }
      });
    }, animationDelay);
  });

  /*----------------------------------------------------*/
  // IZOTOPE
  /*----------------------------------------------------*/
  var o = $('#container');
  if (o.length > 0) {
    var $container = o;

    $container.isotope({
        itemSelector: '.element',
        // layoutMode: 'masonry',
        masonry: {
          columnWidth: '.grid-sizer',
          gutter: '.gutter-sizer'
        },
        percentPosition: true,
        transitionDuration: '0.8s'
    });

    // layout Isotope after each image loads
    $container.imagesLoaded().progress( function() {
      $container.isotope('layout');
    });

    refreshIsotope();

    var $optionSets = $('#options .option-set'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.click(function(){
      var $this = $(this);
      // don't proceed if already selected
      if ( $this.hasClass('selected') ) {
        return false;
      }
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.selected').removeClass('selected');
      $this.addClass('selected');

      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[ key ] = value;
      if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
      } else {
        // otherwise, apply new options
        $container.isotope( options );
      }

      return false;
    });

    function refreshIsotope() {
      $container.isotope('layout');
    }
  }


}); //
$(window).load(function() {
	//



}); //