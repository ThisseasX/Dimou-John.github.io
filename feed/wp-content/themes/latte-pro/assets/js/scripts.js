jQuery(window).load(function() {

	if( latte_script_var.latte_preloader_display != 1 ) {
		/* Preloader */
		jQuery(".status").fadeOut();
		jQuery(".preloader").delay(1000).fadeOut("slow");
	}

	if( latte_script_var.latte_is_homepage != 1 && latte_script_var.latte_animations_display != 1 ) {
		/* scrollReval */
		window.sr = new scrollReveal();
	}

});

jQuery(document).ready(function($) {
	if( latte_script_var.latte_is_homepage != 1 ) {
		/* Smooth Scroll */
		jQuery('a[href*="#"]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = jQuery(this.hash);
				target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					jQuery('html,body').animate({
						scrollTop: target.offset().top
					}, 1200);
					return false;
				}
			}
		});

		/* Parallax */
		if( latte_script_var.latte_intro_display != 1 && latte_script_var.latte_intro_background != '' ) {
			if( latte_script_var.latte_intro_background_full_page != 1 ) {
				$('#intro').parallax({imageSrc: latte_script_var.latte_intro_background, bleed: '10', androidFix: 'false'});
			} else {
				$('.site-wrapper').parallax({imageSrc: latte_script_var.latte_intro_background, bleed: '10', androidFix: 'false'});
			}
		}
		if( latte_script_var.latte_intro_background_full_page != 1 && latte_script_var.latte_about_display != 1 && latte_script_var.latte_about_background != '' ) {
			$('#about').parallax({imageSrc: latte_script_var.latte_about_background, bleed: '10', androidFix: 'false'});
		}
		if( latte_script_var.latte_intro_background_full_page != 1 && latte_script_var.latte_social_display != 1 && latte_script_var.latte_social_background != '' ) {
			$('#social').parallax({imageSrc: latte_script_var.latte_social_background, bleed: '10', androidFix: 'false'});
		}
		if( latte_script_var.latte_intro_background_full_page != 1 && latte_script_var.latte_services_display != 1 && latte_script_var.latte_services_background != '' ) {
			$('#services').parallax({imageSrc: latte_script_var.latte_services_background, bleed: '10', androidFix: 'false'});
		}
		if( latte_script_var.latte_intro_background_full_page != 1 && latte_script_var.latte_separator_display != 1 && latte_script_var.latte_separator_background != '' ) {
			$('#separator').parallax({imageSrc: latte_script_var.latte_separator_background, bleed: '10', androidFix: 'false'});
		}
		if( latte_script_var.latte_intro_background_full_page != 1 && latte_script_var.latte_skills_display != 1 && latte_script_var.latte_skills_background != '' ) {
			$('#skills').parallax({imageSrc: latte_script_var.latte_skills_background, bleed: '10', androidFix: 'false'});
		}
		if( latte_script_var.latte_intro_background_full_page != 1 && latte_script_var.latte_portfolio_display != 1 && latte_script_var.latte_portfolio_background != '' ) {
			$('#portfolio').parallax({imageSrc: latte_script_var.latte_portfolio_background, bleed: '10', androidFix: 'false'});
		}
		if( latte_script_var.latte_intro_background_full_page != 1 && latte_script_var.latte_subscribe_display != 1 && latte_script_var.latte_subscribe_background != '' ) {
			$('#subscribe').parallax({imageSrc: latte_script_var.latte_subscribe_background, bleed: '10', androidFix: 'false'});
		}
		if( latte_script_var.latte_intro_background_full_page != 1 && latte_script_var.latte_pricing_display != 1 && latte_script_var.latte_pricing_background != '' ) {
			$('#pricing').parallax({imageSrc: latte_script_var.latte_pricing_background, bleed: '10', androidFix: 'false'});
		}
		if( latte_script_var.latte_intro_background_full_page != 1 && latte_script_var.latte_testimonials_display != 1 && latte_script_var.latte_testimonials_background != '' ) {
			$('#testimonials').parallax({imageSrc: latte_script_var.latte_testimonials_background, bleed: '10', androidFix: 'false'});
		}
		if( latte_script_var.latte_intro_background_full_page != 1 && latte_script_var.latte_blogposts_display != 1 && latte_script_var.latte_blogposts_background != '' ) {
			$('#blogposts').parallax({imageSrc: latte_script_var.latte_blogposts_background, bleed: '10', androidFix: 'false'});
		}
		if( latte_script_var.latte_intro_background_full_page != 1 && latte_script_var.latte_contact_display != 1 && latte_script_var.latte_contact_background != '' ) {
			$('#contact').parallax({imageSrc: latte_script_var.latte_contact_background, bleed: '50', androidFix: 'false'});
		}
	}

	if( latte_script_var.latte_menu_display != 1 ) {
		var menuLeft = document.getElementById( 'pmenu' ),
		showLeftPush = document.getElementById( 'showLeftPush' ),
		hideLeftPush = document.getElementById( 'hideLeftPush' ),
		body = document.body;

		showLeftPush.onclick = function() {
			classie.toggle( this, 'active' );
			classie.toggle( body, 'pmenu-push-toright' );
			if (classie.has(showLeftPush,"fa-bars")) {
				classie.remove(showLeftPush,"fa-bars");
				classie.add(showLeftPush,"fa-times");
			} else {
				classie.add(showLeftPush,"fa-bars");
			}
			classie.toggle( menuLeft, 'pmenu-open' );
			disableOther( 'showLeftPush' );
		};
		hideLeftPush.onclick = function() {
			classie.toggle( this, 'active' );
			classie.toggle( body, 'pmenu-push-toright' );
			classie.toggle( menuLeft, 'pmenu-open' );
			disableOther( 'hideLeftPush' );
			classie.add(showLeftPush,"fa-bars");
		};

		function disableOther( button ) {
			if( button !== 'showLeftPush' ) {
				classie.toggle( showLeftPush, 'disabled' );
			}
		}
	}

	if( latte_script_var.latte_is_homepage != 1 ) {
		if( latte_script_var.latte_skills_display != 1 ) {
			/* Skillbar animation speed */
			jQuery('.skillbar').each(function(){
				jQuery(this).find('.skillbar-bar').animate({
					width:jQuery(this).attr('data-percent')
				},6000);
			});
		}
		/* Apply matchHeight to match services grid */
		var byRow = $('body').hasClass('pmenu-push');
		if( latte_script_var.latte_services_display != 1 ) {
			$('.col-md-12').each(function() {
				$(this).children('.service-box').matchHeight(byRow);
			});
		}
		if( latte_script_var.latte_portfolio_display != 1 ) {
			$('#portfolio').imagesLoaded( function() {
				$('.col-md-12').each(function() {
					$(this).children('.portfolio-item').matchHeight(byRow);
				});
			});
		}
		if( latte_script_var.latte_blogposts_display != 1 ) {
			$('#blogposts').imagesLoaded( function() {
				$('.col-md-12').each(function() {
					$(this).children('.blog-item').matchHeight(byRow);
				});
			});
		}
		if( latte_script_var.latte_contact_display != 1 ) {
			$('.wpcf7-form').each(function() {
				$(this).find('*').addClass('contact-form');
			});
		}

		if( latte_script_var.latte_testimonials_display != 1 ) {
			/* Enable Swiper for Testimonials */
			var mySwiper = new Swiper ('.swiper-container', {
				loop: true,
				autoplay:10000
			})
		}
	}

});