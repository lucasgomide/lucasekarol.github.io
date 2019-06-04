(function($) {
	"use strict"; // Start of use strict

	/* Logo Lettering */
	var logo_rotate = $("header .gla_logo_animation").attr('data-rotate');
	if (logo_rotate!='') {
		$("header .gla_logo_animation").addClass('gla_logo_rotate_'+logo_rotate);
	}

	var main_menu_icon = $(".gla_main_menu_icon b");
	main_menu_icon.lettering();
	main_menu_icon.each(function(){
	 	var i = 2;
	 	$(this).find('span').each(function(){
			$(this).css('transition-delay','0.'+i+'s');
			i++;
		})
	 });

	$("header .gla_logo_animation").lettering();
	$("header .gla_logo_animation span").each(function(){
	 	var min = 0;
	 	var max = 50;
	 	var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
	 	$(this).css('transition-delay', '0.'+randomNumber+'s');
	 });

	/*CountTo*/
	$('.gla_timer').appear(function() {
        var e = $(this);
        e.countTo({
            from: 0,
            to: e.html(),
            speed: 1300,
            refreshInterval: 60
        })
    })

    /*Gallery Lightbox*/
	$('.lightbox').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});

	/* Mobile Menu */
	$('.gla_main_menu').on("click", function(e){
		$(this).next('.gla_main_menu_content').toggleClass('active');
		$(this).next().next('.gla_main_menu_content_menu').toggleClass('active');
		$(this).toggleClass('active');
	});

	/* Section Background */
	$('.gla_image_bck').each(function(){
		var image = $(this).attr('data-image');
		var gradient = $(this).attr('data-gradient');
		var color = $(this).attr('data-color');
		var blend = $(this).attr('data-blend');
		var opacity = $(this).attr('data-opacity');
		var position = $(this).attr('data-position');
		var height = $(this).attr('data-height');
		if (image){
			$(this).css('background-image', 'url('+image+')');
		}
		if (gradient){
			$(this).css('background-image', gradient);
		}
		if (color){
			$(this).css('background-color', color);
		}
		if (blend){
			$(this).css('background-blend-mode', blend);
		}
		if (position){
			$(this).css('background-position', position);
		}
		if (opacity){
			$(this).css('opacity', opacity);
		}
		if (height){
			$(this).css('height', height);
		}

	});



	/* Over */
	$('.gla_over, .gla_head_bck').each(function(){
		var color = $(this).attr('data-color');
		var image = $(this).attr('data-image');
		var opacity = $(this).attr('data-opacity');
		var blend = $(this).attr('data-blend');
		var gradient = $(this).attr('data-gradient');
		if (gradient){
			$(this).css('background-image', gradient);
		}
		if (color){
			$(this).css('background-color', color);
		}
		if (image){
			$(this).css('background-image', 'url('+image+')');
		}
		if (opacity){
			$(this).css('opacity', opacity);
		}
		if (blend){
			$(this).css('mix-blend-mode', blend);
		}
	});
	$('.gla_slide_title, h2').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).find('span').css('color', color);
		}
	});
	$('.gla_icon_box').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).find('i').css('color', color);
		}
	});
	$('.skill-bar-content').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).css('background-image', color);
		}
	});
	$('img.gla_img_shadow').each(function(){
		var color = $(this).attr('data-shadow');
		if (color){
			$(this).css('filter', color);
		}
	});
	$('.gla_page').each(function(){
		var border = $(this).attr('data-border');
		if (border){
			$('.gla_border_top, .gla_border_bottom, .gla_border_left, .gla_border_right, .gla_sml_abs_title').css('background', border);
			$('.gla_bordered_block').css('border-left-color', border);
			$('.gla_border').css('border-bottom-color', border).css('border-top-color', border);
			$('.gla_team_simple .gla_bordered_block').css('border-top-color', border);
		}
	});
	$('.gla_default_menu').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).find('ul').css('background-color', color);
		}
	});

	/* Mobile Menu */
	$('.gla_top_menu_mobile_link').on("click", function(e){
		$(this).next('.gla_top_menu_cont').fadeToggle();
		$(this).parents('.gla_light_nav').toggleClass('active');
	});



	$('.gla_countdown').each(function(){
		var year = $(this).attr('data-year');
		var month = $(this).attr('data-month');
		var day = $(this).attr('data-day');
		$(this).countdown({until: new Date(year,month-1,day)});

	});


	/*Scroll Effect*/
	$('.gla_go').on("click", function(e){
		$('.gla_main_menu.active').click();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 300);
		e.preventDefault();
	});

	/*Animation Block Delay*/

	$('div[data-animation=animation_blocks]').each(function(){
	var i = 0;
		$(this).find('.gla_icon_box, .skill-bar-content, .gla_anim_box').each(function(){
			$(this).css('transition-delay','0.'+i+'s');
			i++;
		})
	})

	/*Increase-Decrease*/
    $('.increase-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('.qty').val();
    	var qtyb = qtya * 1 + 1;
    	$(this).parents('.add-to-cart').find('#qty').val(qtyb);
		e.preventDefault();
	});
	$('.decrease-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('#qty').val();
    	var qtyb = qtya * 1 - 1;
    	if (qtyb < 1) {
            qtyb = 1;
        }
    	$(this).parents('.add-to-cart').find('#qty').val(qtyb);
		e.preventDefault();
	});

	/* Shortcode Nav */
	var top_offset = $('header').height() - 1;

	$('#nav-sidebar').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 700,
		scrollOffset: top_offset,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});



	/* Bootstrap */
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	/* Anchor Scroll */
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$(".gla_logo").addClass('active');
		}
		else {
			$(".gla_logo").removeClass('active');
		}
		if ($(window).scrollTop() > 500) {
			$('body').addClass('gla_second_step');
		}
		else {
			$('body').removeClass('gla_second_step');
		}
	});

	/* Fixed for Parallax */
	$(".gla_fixed").css("background-attachment","fixed");


	/* Submenu */
 	$('.gla_parent').on({
		mouseenter:function(){
			$(this).find('ul').addClass('active');
		},mouseleave:function(){
			$(this).find('ul').removeClass('active');
		}
	});
	$('.gla_search_parent').on({
		mouseenter:function(){
			$(this).find('ul').addClass('active');
		},mouseleave:function(){
			$(this).find('ul').removeClass('active');
		}
	});

	/* Music */
	$('.gla_music_icon').on('click',function(){
		$('.gla_music_icon_cont').fadeToggle();
	});

 	/* Mobile Menu */

	$('.gla_main_menu_content_menu .gla_parent').on("click", function(e){
		$(this).find('ul').slideToggle(300);
	});
	$('.gla_mobile_menu').on("click", function(e){
		$(this).toggleClass('active');
		$('.gla_mobile_menu_hor').toggleClass('active');
	});





	$(window).load(function(){

			// Page loader

	    $("body").imagesLoaded(function(){
	        $(".gla_page_loader div").fadeOut();
	    	$(".gla_page_loader").delay(200).fadeOut("slow");
	    });




	 	/*Masonry*/
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  stagger: 0,
		  transitionDuration: '0',
		  isAnimated: true,
		  masonry: {
		    columnWidth: '.grid-item',

		  }
		});
		$grid.imagesLoaded().progress( function() {
		  $grid.isotope('layout');
		});


		/*SkroolR*/
		if( !device.tablet() && !device.mobile() ) {
			var s = skrollr.init({
				forceHeight: false,
			});
		}




		$('.masonry').masonry({
			itemSelector: '.masonry-item',
		});

		$('.filter-button-group').on( 'click', 'a', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});

		$(window).resize(function(){
		  $grid.isotope('layout');
		});



		if( !device.tablet() && !device.mobile() ) {
				$(window).stellar({
				 	horizontalScrolling: false,
					responsive: true,
					verticalOffset: 50
			 	});
			}


		/*Boxes AutoHeight*/
		function setEqualHeight(columns)
		{
			var tallestcolumn = 0;
			columns.each(
				function()
				{
					$(this).css('height','auto');
					var currentHeight = $(this).height();
					if(currentHeight > tallestcolumn)
						{
						tallestcolumn = currentHeight;
						}
				}
			);
		columns.height(tallestcolumn);
		}

		/* Block Autheight */
		if( !device.tablet() && !device.mobile() ) {
			$('.gla_auto_height').each(function(){
				setEqualHeight($(this).find('> div[class^="col"]'));
			});
		}
		if( device.tablet() && device.landscape() ) {
			$('.gla_auto_height').each(function(){
				setEqualHeight($(this).find('> div[class^="col"]'));
			});
		}

		$(window).resize(function() {
			if( !device.tablet() && !device.mobile() ) {
				$('.gla_auto_height').each(function(){
					setEqualHeight($(this).find('> div[class^="col"]'));
				});
			}
			if( device.tablet() && device.landscape() ) {
				$('.gla_auto_height').each(function(){
					setEqualHeight($(this).find('> div[class^="col"]'));
				});
			}
			if( device.tablet() && device.portrait() ) {
				$('.gla_auto_height').each(function(){
					$(this).find('> div[class^="col"]').height('auto');
				});
			}
		});


	});



})(jQuery);





