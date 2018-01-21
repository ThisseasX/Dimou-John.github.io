( function( $ ) {

	// General Settings > Site Identity > Site Title
	wp.customize( 'blogname', function( value ) {
		value.bind( function( newval ) {
			$('.intro h1.cover-heading').text( newval );
			$('.archive-header h1.cover-heading').text( newval );
		} );
	} );

	// General Settings > Site Identity > Site Description
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( newval ) {
			$('.intro p.lead').text( newval );
			$('.archive-header p.lead').text( newval );
		} );
	} );

	// General Settings > Menu > Icon
	wp.customize( 'latte_menu_icon_color', function( value ) {
		value.bind( function( newval ) {
			$('#showLeftPush').css( 'color', newval );
		} );
	} );

	// General Settings > Menu > Icon Background
	wp.customize( 'latte_menu_icon_background', function( value ) {
		value.bind( function( newval ) {
			$('#showLeftPush').css( 'background', newval );
		} );
	} );

	// General Settings > Menu > Background
	wp.customize( 'latte_menu_background', function( value ) {
		value.bind( function( newval ) {
			$('.pmenu').css( 'background', newval );
		} );
	} );

	// General Settings > Menu > Header Background
	wp.customize( 'latte_menu_header_background', function( value ) {
		value.bind( function( newval ) {
			$('.pmenu h3').css( 'background', newval );
			$('.pmenu a').hover(function(){
				$(this).css('background', newval );
			},function(){
				$(this).css('background', 'inherit' );
			});
			$('.pmenu-vertical a').css( 'border-bottom', '2px solid' +newval );
		} );
	} );

	// General Settings > Menu > Text Color
	wp.customize( 'latte_menu_text_color', function( value ) {
		value.bind( function( newval ) {
			$('.pmenu h3').css( 'color', newval );
			$('.pmenu a').css( 'color', newval );
			$('.pmenu a:hover').css( 'color', newval );
		} );
	} );

	// General Settings > Footer > Content
	wp.customize( 'latte_footer_content', function( value ) {
		value.bind( function( newval ) {
			$('.footer .credits').html( newval );
		} );
	} );

	// General Settings > Footer > Footer Background
	wp.customize( 'latte_footer_background', function( value ) {
		value.bind( function( newval ) {
			$('.footer').css( 'background', newval );
		} );
	} );

	// General Settings > Footer > Text
	wp.customize( 'latte_footer_text', function( value ) {
		value.bind( function( newval ) {
			$('.footer').css( 'color', newval );
			$('.footer a').css( 'color', newval );
		} );
	} );

	// Intro Section > Content > Avatar Image
	wp.customize( 'latte_intro_avatar', function( value ) {
		value.bind( function( newval ) {
			if ( newval == '' ) {
				$('.intro .avatar').css( 'display', 'none' );
			} else {
				$('.intro .avatar').removeClass( 'customizer-hidden' );
				$('.intro .avatar').css( 'background-image', 'url(' +newval+ ')' );
				$('.intro .avatar').css( 'display', 'block' );
			}
		} );
	} );

	// Intro Section > Content > Scroll Anchor
	wp.customize( 'latte_intro_scroll', function( value ) {
		value.bind( function( newval ) {
			if ( newval == '' ) {
				$('.intro .arrow').css( 'display', 'none' );
			} else {
				$('.intro .arrow').removeClass( 'customizer-hidden' );
				$('.intro .arrow').css( 'display', 'block' );
				$('.intro .arrow .fa').attr( 'href', newval );
			}
		} );
	} );

	// Intro Section > Colors > Background Color
	wp.customize( 'latte_intro_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.intro').css( 'background', newval );
		} );
	} );

	// Intro Section > Color > Text
	wp.customize( 'latte_intro_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.intro .cover-heading').css( 'color', newval );
		} );
	} );

	// Intro Section > Color > Description
	wp.customize( 'latte_intro_description_color', function( value ) {
		value.bind( function( newval ) {
			$('.intro .lead').css( 'color', newval );
		} );
	} );

	// Intro Section > Color > Anchor
	wp.customize( 'latte_intro_anchor_color', function( value ) {
		value.bind( function( newval ) {
			$('.intro .arrow .fa').css( 'color', newval );
		} );
	} );

	// About Section > Settings > Section Title
	wp.customize( 'latte_about_title', function( value ) {
		value.bind( function( newval ) {
			$('.about .about-header h2').text( newval );
		} );
	} );

	// About Section > Settings > Section Subtitle
	wp.customize( 'latte_about_subtitle', function( value ) {
		value.bind( function( newval ) {
			$('.about .about-header h3').text( newval );
		} );
	} );

	// About Section > Content > Image
	wp.customize( 'latte_about_avatar', function( value ) {
		value.bind( function( newval ) {
			if ( newval == '' ) {
				$('.about .about-image').css( 'display', 'none' );
				$('.about .col-md-7').attr( 'class', 'cold-md-12' );
			} else {
				$('.about .about-image').removeClass( 'customizer-hidden' );
				$('.about .about-image').css( 'display', 'block' );
				$('.about .col-md-12').attr( 'class', 'cold-md-7' );
				$('.about .about-image').attr( 'src', newval );
			}
		} );
	} );

	// About Section > Content > Name
	wp.customize( 'latte_about_name', function( value ) {
		value.bind( function( newval ) {
			$('.about h3.name').text( newval );
		} );
	} );

	// About Section > Content > Position
	wp.customize( 'latte_about_position', function( value ) {
		value.bind( function( newval ) {
			$('.about span.text-muted').text( newval );
		} );
	} );

	// About Section > Content > Content
	wp.customize( 'latte_about_content', function( value ) {
		value.bind( function( newval ) {
			$('.about div.lead').html( newval );
		} );
	} );

	// About Section > Colors > Background Color
	wp.customize( 'latte_about_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.about').css( 'background', newval );
		} );
	} );

	// About Section > Colors > Title
	wp.customize( 'latte_about_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.about .about-header h2').css( 'color', newval );
		} );
	} );

	// About Section > Colors > Subtitle
	wp.customize( 'latte_about_subtitle_color', function( value ) {
		value.bind( function( newval ) {
			$('.about .about-header h3').css( 'color', newval );
		} );
	} );

	// About Section > Colors > Name
	wp.customize( 'latte_about_name_color', function( value ) {
		value.bind( function( newval ) {
			$('.about .name').css( 'color', newval );
		} );
	} );

	// About Section > Colors > Position
	wp.customize( 'latte_about_position_color', function( value ) {
		value.bind( function( newval ) {
			$('.about span.text-muted').css( 'color', newval );
		} );
	} );

	// About Section > Colors > Content
	wp.customize( 'latte_about_content_color', function( value ) {
		value.bind( function( newval ) {
			$('.about .lead').css( 'color', newval );
		} );
	} );

	// Social Section > Settings > Section Title
	wp.customize( 'latte_social_title', function( value ) {
		value.bind( function( newval ) {
			$('.social .social-header h2').text( newval );
		} );
	} );

	// Social Section > Content > 1. Icon URL
	wp.customize( 'latte_social_facebook', function( value ) {
		value.bind( function( newval ) {
			if ( newval == '' ) {
				$('.social .sb-first').css( 'display', 'none' );
			} else {
				$('.social .sb-first').removeClass( 'customizer-hidden' );
				$('.social .sb-first').css( 'display', 'inline-block' );
				$('.it-first .icon a').attr( 'href', newval );
			}
		} );
	} );

	// Social Section > Content > 1. Icon Title
	wp.customize( 'latte_social_facebook_title', function( value ) {
		value.bind( function( newval ) {
			$('.social .it-first span').text( newval );
		} );
	} );

	// Social Section > Content > 2. Icon URL
	wp.customize( 'latte_social_twitter', function( value ) {
		value.bind( function( newval ) {
			if ( newval == '' ) {
				$('.social .sb-second').css( 'display', 'none' );
			} else {
				$('.social .sb-second').removeClass( 'customizer-hidden' );
				$('.social .sb-second').css( 'display', 'inline-block' );
				$('.it-second .icon a').attr( 'href', newval );
			}
		} );
	} );

	// Social Section > Content > 2. Icon Title
	wp.customize( 'latte_social_twitter_title', function( value ) {
		value.bind( function( newval ) {
			$('.social .it-second span').text( newval );
		} );
	} );

	// Social Section > Content > 3. Icon URL
	wp.customize( 'latte_social_google_plus', function( value ) {
		value.bind( function( newval ) {
			if ( newval == '' ) {
				$('.social .sb-third').css( 'display', 'none' );
			} else {
				$('.social .sb-third').removeClass( 'customizer-hidden' );
				$('.social .sb-third').css( 'display', 'inline-block' );
				$('.it-third .icon a').attr( 'href', newval );
			}
		} );
	} );

	// Social Section > Content > 3. Icon Title
	wp.customize( 'latte_social_google_plus_title', function( value ) {
		value.bind( function( newval ) {
			$('.social .it-third span').text( newval );
		} );
	} );

	// Social Section > Content > 4. Icon URL
	wp.customize( 'latte_social_instagram', function( value ) {
		value.bind( function( newval ) {
			if ( newval == '' ) {
				$('.social .sb-fourth').css( 'display', 'none' );
			} else {
				$('.social .sb-fourth').removeClass( 'customizer-hidden' );
				$('.social .sb-fourth').css( 'display', 'inline-block' );
				$('.it-fourth .icon a').attr( 'href', newval );
			}
		} );
	} );

	// Social Section > Content > 4. Icon Title
	wp.customize( 'latte_social_instagram_title', function( value ) {
		value.bind( function( newval ) {
			$('.social .it-fourth span').text( newval );
		} );
	} );

	// Social Section > Content > 5. Icon URL
	wp.customize( 'latte_social_github', function( value ) {
		value.bind( function( newval ) {
			if ( newval == '' ) {
				$('.social .sb-fifth').css( 'display', 'none' );
			} else {
				$('.social .sb-fifth').removeClass( 'customizer-hidden' );
				$('.social .sb-fifth').css( 'display', 'inline-block' );
				$('.it-fifth .icon a').attr( 'href', newval );
			}
		} );
	} );

	// Social Section > Content > 5. Icon Title
	wp.customize( 'latte_social_github_title', function( value ) {
		value.bind( function( newval ) {
			$('.social .it-fifth span').text( newval );
		} );
	} );

	// Social Section > Colors > Background Color
	wp.customize( 'latte_social_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.social').css( 'background', newval );
		} );
	} );

	// Social Section > Colors > Title
	wp.customize( 'latte_social_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.social .social-header h2').css( 'color', newval );
		} );
	} );

	// Social Section > Colors > Icon
	wp.customize( 'latte_social_color', function( value ) {
		value.bind( function( newval ) {
			$('.social .icon-item .icon i').css( 'color', newval );
			$('.social .icon-item span').css( 'color', newval );
			$('.social .icon-item .icon').css( 'border', '4px solid' +newval );
		} );
	} );

	// Social Section > Colors > 1. Icon Hover Background
	wp.customize( 'latte_social_facebook_background', function( value ) {
		value.bind( function( newval ) {
			$('.social .row .social-box .it-first .icon').hover(function(){
				$(this).css('background', newval );
			},function(){
				$(this).css('background', 'transparent' );
			});
		} );
	} );

	// Social Section > Colors > 2. Icon Hover Background
	wp.customize( 'latte_social_twitter_background', function( value ) {
		value.bind( function( newval ) {
			$('.social .row .social-box .it-second .icon').hover(function(){
				$(this).css('background', newval );
			},function(){
				$(this).css('background', 'transparent' );
			});
		} );
	} );

	// Social Section > Colors > 3. Icon Hover Background
	wp.customize( 'latte_social_google_plus_background', function( value ) {
		value.bind( function( newval ) {
			$('.social .row .social-box .it-third .icon').hover(function(){
				$(this).css('background', newval );
			},function(){
				$(this).css('background', 'transparent' );
			});
		} );
	} );

	// Social Section > Colors > 4. Icon Hover Background
	wp.customize( 'latte_social_instagram_background', function( value ) {
		value.bind( function( newval ) {
			$('.social .row .social-box .it-fourth .icon').hover(function(){
				$(this).css('background', newval );
			},function(){
				$(this).css('background', 'transparent' );
			});
		} );
	} );

	// Social Section > Colors > 5. Icon Hover Background
	wp.customize( 'latte_social_github_background', function( value ) {
		value.bind( function( newval ) {
			$('.social .row .social-box .it-fifth .icon').hover(function(){
				$(this).css('background', newval );
			},function(){
				$(this).css('background', 'transparent' );
			});
		} );
	} );

	// Services Section > Settings > Section Title
	wp.customize( 'latte_services_title', function( value ) {
		value.bind( function( newval ) {
			$('.services .services-header h2').text( newval );
		} );
	} );

	// Services Section > Settings > Section Subtitle
	wp.customize( 'latte_services_subtitle', function( value ) {
		value.bind( function( newval ) {
			$('.services .services-header h3').text( newval );
		} );
	} );

	// Services Section > Colors > Background Color
	wp.customize( 'latte_services_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.services').css( 'background', newval );
		} );
	} );

	// Services Section > Colors > Title
	wp.customize( 'latte_services_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.services .services-header h2').css( 'color', newval );
		} );
	} );

	// Services Section > Colors > Subtitle
	wp.customize( 'latte_services_subtitle_color', function( value ) {
		value.bind( function( newval ) {
			$('.services .services-header h3').css( 'color', newval );
		} );
	} );

	// Services Section > Colors > Icon/Title Background
	wp.customize( 'latte_services_widget_icon_background', function( value ) {
		value.bind( function( newval ) {
			$('.services .service-icon').css( 'background', newval );
		} );
	} );

	// Services Section > Colors > Icon
	wp.customize( 'latte_services_widget_icon_color', function( value ) {
		value.bind( function( newval ) {
			$('.services .service-icon .fa').css( 'color', newval );
		} );
	} );

	// Services Section > Colors > Title
	wp.customize( 'latte_services_widget_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.services .service-icon h3').css( 'color', newval );
		} );
	} );

	// Services Section > Colors > Text Background
	wp.customize( 'latte_services_widget_text_background', function( value ) {
		value.bind( function( newval ) {
			$('.services .service-box p').css( 'background', newval );
		} );
	} );

	// Services Section > Colors > Text
	wp.customize( 'latte_services_widget_text_color', function( value ) {
		value.bind( function( newval ) {
			$('.services .service-box p').css( 'color', newval );
		} );
	} );

	// Separator Section > Content > Content
	wp.customize( 'latte_separator_content', function( value ) {
		value.bind( function( newval ) {
			$('.separator h2').text( newval );
		} );
	} );

	// Separator Section > Content > Button Label
	wp.customize( 'latte_separator_button', function( value ) {
		value.bind( function( newval ) {
			$('.separator .btn').text( newval );
		} );
	} );

	// Separator Section > Content > Button Link
	wp.customize( 'latte_separator_link', function( value ) {
		value.bind( function( newval ) {
			$('.separator .btn').attr( 'href', newval );
		} );
	} );

	// Separator Section > Colors > Background Color
	wp.customize( 'latte_separator_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.separator').css( 'background', newval );
		} );
	} );

	// Separator Section > Colors > Text
	wp.customize( 'latte_separator_color', function( value ) {
		value.bind( function( newval ) {
			$('.separator h2').css( 'color', newval );
		} );
	} );

	// Separator Section > Colors > Button Text
	wp.customize( 'latte_separator_button_color', function( value ) {
		value.bind( function( newval ) {
			$('.separator .btn').css( 'color', newval );
			window.latte_separator_button_color = newval;
		} );
	} );

	// Separator Section > Colors > Button Text Hover
	wp.customize( 'latte_separator_button_hover_color', function( value ) {
		value.bind( function( newval ) {
			$('.separator .btn').hover(function(){
				$(this).css('color', newval );
			},function(){
				$(this).css('color', latte_separator_button_color );
			});
		} );
	} );

	// Separator Section > Colors > Button Background
	wp.customize( 'latte_separator_button_background', function( value ) {
		value.bind( function( newval ) {
			$('.separator .btn').css( 'background', newval );
			window.latte_separator_button_background = newval;
		} );
	} );

	// Separator Section > Colors > Button Background Hover
	wp.customize( 'latte_separator_button_hover_background', function( value ) {
		value.bind( function( newval ) {
			$('.separator .btn').hover(function(){
				$(this).css('background', newval );
			},function(){
				$(this).css('background', latte_separator_button_background );
			});
		} );
	} );

	// Skills Section > Settings > Section Title
	wp.customize( 'latte_skills_title', function( value ) {
		value.bind( function( newval ) {
			$('.skills .skills-header h2').text( newval );
		} );
	} );

	// Skills Section > Settings > Section Subtitle
	wp.customize( 'latte_skills_subtitle', function( value ) {
		value.bind( function( newval ) {
			$('.skills .skills-header h3').text( newval );
		} );
	} );

	// Skills Section > Colors > Background Color
	wp.customize( 'latte_skills_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.skills').css( 'background', newval );
		} );
	} );

	// Skills Section > Colors > Title
	wp.customize( 'latte_skills_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.skills .skills-header h2').css( 'color', newval );
		} );
	} );

	// Skills Section > Colors > Subtitle
	wp.customize( 'latte_skills_subtitle_color', function( value ) {
		value.bind( function( newval ) {
			$('.skills .skills-header h3').css( 'color', newval );
		} );
	} );

	// Portfolio Section > Settings > Section Title
	wp.customize( 'latte_portfolio_title', function( value ) {
		value.bind( function( newval ) {
			$('.portfolio-grid .portfolio-header h2').text( newval );
		} );
	} );

	// Portfolio Section > Settings > Section Subtitle
	wp.customize( 'latte_portfolio_subtitle', function( value ) {
		value.bind( function( newval ) {
			$('.portfolio-grid .portfolio-header h3').text( newval );
		} );
	} );

	// Portfolio Section > Colors > Background Color
	wp.customize( 'latte_portfolio_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.portfolio-grid').css( 'background', newval );
		} );
	} );

	// Portfolio Section > Colors > Title
	wp.customize( 'latte_portfolio_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.portfolio-grid .portfolio-header h2').css( 'color', newval );
		} );
	} );

	// Portfolio Section > Colors > Subtitle
	wp.customize( 'latte_portfolio_subtitle_color', function( value ) {
		value.bind( function( newval ) {
			$('.portfolio-grid .portfolio-header h3').css( 'color', newval );
		} );
	} );

	// Portfolio Section > Colors > Item Background
	wp.customize( 'latte_portfolio_item_background', function( value ) {
		value.bind( function( newval ) {
			$('.portfolio-grid .portfolio-item .portfolio-caption').css( 'background', newval );
		} );
	} );

	// Portfolio Section > Colors > Item Title
	wp.customize( 'latte_portfolio_item_title', function( value ) {
		value.bind( function( newval ) {
			$('.portfolio-grid .portfolio-item .portfolio-caption h4').css( 'color', newval );
		} );
	} );

	// Portfolio Section > Colors > Item Category
	wp.customize( 'latte_portfolio_item_category', function( value ) {
		value.bind( function( newval ) {
			$('.portfolio-grid .portfolio-item .portfolio-caption h5').css( 'color', newval );
			$('.portfolio-grid .portfolio-item .portfolio-caption h5 a').css( 'color', newval );
		} );
	} );

	// Portfolio Section > Colors > Item Hover Box
	wp.customize( 'latte_portfolio_item_hover', function( value ) {
		value.bind( function( newval ) {
			$('.portfolio-grid .portfolio-item .portfolio-link .portfolio-hover').css( 'background', newval );
		} );
	} );

	// Portfolio Section > Colors > Item Hover Box Icon
	wp.customize( 'latte_portfolio_item_hover_icon', function( value ) {
		value.bind( function( newval ) {
			$('.portfolio-grid .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content').css( 'color', newval );
		} );
	} );

	// Subscribe Section > Settings > Section Title
	wp.customize( 'latte_subscribe_title', function( value ) {
		value.bind( function( newval ) {
			$('.subscribe .subscribe-header h2').text( newval );
		} );
	} );

	// Subscribe Section > Settings > Section Subtitle
	wp.customize( 'latte_subscribe_subtitle', function( value ) {
		value.bind( function( newval ) {
			$('.subscribe .subscribe-header h3').text( newval );
		} );
	} );

	// Subscribe Section > Colors > Background Color
	wp.customize( 'latte_subscribe_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.subscribe').css( 'background', newval );
		} );
	} );

	// Subscribe Section > Colors > Title
	wp.customize( 'latte_subscribe_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.subscribe .subscribe-header h2').css( 'color', newval );
		} );
	} );

	// Subscribe Section > Colors > Subtitle
	wp.customize( 'latte_subscribe_subtitle_color', function( value ) {
		value.bind( function( newval ) {
			$('.subscribe .subscribe-header h3').css( 'color', newval );
		} );
	} );

	// Subscribe Section > Colors > Section Text
	wp.customize( 'latte_subscribe_text', function( value ) {
		value.bind( function( newval ) {
			$('.subscribe p').css( 'color', newval );
			$('.subscribe .sendinbluetitle').css( 'color', newval );
		} );
	} );

	// Subscribe Section > Settings > SendinBlue Field Background
	wp.customize( 'latte_subscribe_field_background', function( value ) {
		value.bind( function( newval ) {
			$('section#subscribe form.sib_signup_form div.sib_signup_box_inside input[type="text"].sib-NAME-area').css( 'background', newval );
			$('section#subscribe form.sib_signup_form div.sib_signup_box_inside input[type="email"].sib-email-area').css( 'background', newval );
		} );
	} );

	// Subscribe Section > Settings > SendinBlue Field Text
	wp.customize( 'latte_subscribe_field_text', function( value ) {
		value.bind( function( newval ) {
			$('section#subscribe form.sib_signup_form div.sib_signup_box_inside input[type="text"].sib-NAME-area').css( 'color', newval );
			$('section#subscribe form.sib_signup_form div.sib_signup_box_inside input[type="email"].sib-email-area').css( 'color', newval );
		} );
	} );

	// Subscribe Section > Settings > SendinBlue Field Border
	wp.customize( 'latte_subscribe_field_border', function( value ) {
		value.bind( function( newval ) {
			$('section#subscribe form.sib_signup_form div.sib_signup_box_inside input[type="text"].sib-NAME-area').css( 'border', '1px solid' +newval );
			$('section#subscribe form.sib_signup_form div.sib_signup_box_inside input[type="email"].sib-email-area').css( 'border', '1px solid' +newval );
		} );
	} );

	// Subscribe Section > Settings > SendinBlue Button Text
	wp.customize( 'latte_subscribe_button_text', function( value ) {
		value.bind( function( newval ) {
			$('section#subscribe form.sib_signup_form div.sib_signup_box_inside .sib-default-btn').css( 'color', newval );
 			window.latte_subscribe_button_text = newval;
		} );
	} );

	// Subscribe Section > Settings > SendinBlue Button Text Hover
	wp.customize( 'latte_subscribe_button_text_hover', function( value ) {
		value.bind( function( newval ) {
			$('section#subscribe form.sib_signup_form div.sib_signup_box_inside .sib-default-btn').hover(function(){
				$(this).css('color', newval );
			},function(){
				$(this).css('color', latte_subscribe_button_text );
			});
		} );
	} );

	// Subscribe Section > Settings > SendinBlue Button Background
	wp.customize( 'latte_subscribe_button_background', function( value ) {
		value.bind( function( newval ) {
			$('section#subscribe form.sib_signup_form div.sib_signup_box_inside .sib-default-btn').css( 'background', newval );
 			window.latte_subscribe_button_background = newval;
		} );
	} );

	// Subscribe Section > Settings > SendinBlue Button Background Hover
	wp.customize( 'latte_subscribe_button_background_hover', function( value ) {
		value.bind( function( newval ) {
			$('section#subscribe form.sib_signup_form div.sib_signup_box_inside .sib-default-btn').hover(function(){
				$(this).css('background', newval );
			},function(){
				$(this).css('background', latte_subscribe_button_background );
			});
		} );
	} );

	// Pricing Section > Settings > Section Title
	wp.customize( 'latte_pricing_title', function( value ) {
		value.bind( function( newval ) {
			$('.pricing .pricing-header h2').text( newval );
		} );
	} );

	// Pricing Section > Settings > Section Subtitle
	wp.customize( 'latte_pricing_subtitle', function( value ) {
		value.bind( function( newval ) {
			$('.pricing .pricing-header h3').text( newval );
		} );
	} );

	// Pricing Section > Colors > Background Color
	wp.customize( 'latte_pricing_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.pricing').css( 'background', newval );
		} );
	} );

	// Pricing Section > Colors > Title
	wp.customize( 'latte_pricing_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.pricing .pricing-header h2').css( 'color', newval );
		} );
	} );

	// Pricing Section > Colors > Subtitle
	wp.customize( 'latte_pricing_subtitle_color', function( value ) {
		value.bind( function( newval ) {
			$('.pricing .pricing-header h3').css( 'color', newval );
		} );
	} );

	// Pricing Section > Colors > Table Background
	wp.customize( 'latte_pricing_table_background', function( value ) {
		value.bind( function( newval ) {
			$('.pricing .pricing-plans .pricing-plan .pricing-container').css( 'background', newval );
		} );
	} );

	// Pricing Section > Colors > Table Title
	wp.customize( 'latte_pricing_table_title', function( value ) {
		value.bind( function( newval ) {
			$('.pricing-container .title h2').css( 'color', newval );
		} );
	} );

	// Pricing Section > Colors > Table Subtitle
	wp.customize( 'latte_pricing_table_subtitle', function( value ) {
		value.bind( function( newval ) {
			$('.pricing-container .title h3').css( 'color', newval );
		} );
	} );

	// Pricing Section > Colors > Price Tag Background
	wp.customize( 'latte_pricing_table_price_background', function( value ) {
		value.bind( function( newval ) {
			$('.pricing-container .price p').css( 'background', newval );
		} );
	} );

	// Pricing Section > Colors > Price Tag Text
	wp.customize( 'latte_pricing_table_price_text', function( value ) {
		value.bind( function( newval ) {
			$('.pricing-container .price p').css( 'color', newval );
		} );
	} );

	// Pricing Section > Colors > Features
	wp.customize( 'latte_pricing_table_features', function( value ) {
		value.bind( function( newval ) {
			$('.pricing-container .options li').css( 'color', newval );
		} );
	} );

	// Pricing Section > Colors > Button Background
	wp.customize( 'latte_pricing_table_button_background', function( value ) {
		value.bind( function( newval ) {
			$('.pricing-container .button a').css( 'background', newval );
			window.latte_pricing_table_button_background = newval;
		} );
	} );

	// Pricing Section > Colors > Button Border
	wp.customize( 'latte_pricing_table_button_border', function( value ) {
		value.bind( function( newval ) {
			$('.pricing-container .button a').css( 'border', '2px solid' +newval );
			window.latte_pricing_table_button_border = newval;
		} );
	} );

	// Pricing Section > Colors > Button Text
	wp.customize( 'latte_pricing_table_button_text', function( value ) {
		value.bind( function( newval ) {
			$('.pricing-container .button a').css( 'color', newval );
			window.latte_pricing_table_button_text = newval;
		} );
	} );

	// Pricing Section > Colors > Button Background Hover
	wp.customize( 'latte_pricing_table_button_background_hover', function( value ) {
		value.bind( function( newval ) {
			$('.pricing-container .button a').hover(function(){
				$(this).css('background', newval );
			},function(){
				$(this).css('background', latte_pricing_table_button_background );
			});
		} );
	} );

	// Pricing Section > Colors > Button Border Hover
	wp.customize( 'latte_pricing_table_button_border_hover', function( value ) {
		value.bind( function( newval ) {
			$('.pricing-container .button a').hover(function(){
				$(this).css( 'border', '2px solid' +newval );
			},function(){
				$(this).css( 'border', '2px solid' +latte_pricing_table_button_border );
			});
		} );
	} );

	// Pricing Section > Colors > Button Text Hover
	wp.customize( 'latte_pricing_table_button_text_hover', function( value ) {
		value.bind( function( newval ) {
			$('.pricing-container .button a').hover(function(){
				$(this).css('color', newval );
			},function(){
				$(this).css('color', latte_pricing_table_button_text );
			});
		} );
	} );

	// Testimonials Section > Settings > Section Title
	wp.customize( 'latte_testimonials_title', function( value ) {
		value.bind( function( newval ) {
			$('.testimonials .testimonials-header h2').text( newval );
		} );
	} );

	// Testimonials Section > Settings > Section Subtitle
	wp.customize( 'latte_testimonials_subtitle', function( value ) {
		value.bind( function( newval ) {
			$('.testimonials .testimonials-header h3').text( newval );
		} );
	} );

	// Testimonials Section > Colors > Background Color
	wp.customize( 'latte_testimonials_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.testimonials').css( 'background', newval );
		} );
	} );

	// Testimonials Section > Colors > Title
	wp.customize( 'latte_testimonials_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.testimonials .testimonials-header h2').css( 'color', newval );
		} );
	} );

	// Testimonials Section > Colors > Subtitle
	wp.customize( 'latte_testimonials_subtitle_color', function( value ) {
		value.bind( function( newval ) {
			$('.testimonials .testimonials-header h3').css( 'color', newval );
		} );
	} );

	// Testimonials Section > Colors > Main Color
	wp.customize( 'latte_testimonials_main_color', function( value ) {
		value.bind( function( newval ) {
			$('.testimonials .testimonials-slide blockquote').css( 'color', newval );
		} );
	} );

	// Testimonials Section > Colors > Meta Color
	wp.customize( 'latte_testimonials_meta_color', function( value ) {
		value.bind( function( newval ) {
			$('.testimonials .testimonials-slide span').css( 'color', newval );
		} );
	} );

	// Blog Section > Settings > Section Title
	wp.customize( 'latte_blogposts_title', function( value ) {
		value.bind( function( newval ) {
			$('.blogposts .blog-header h2').text( newval );
		} );
	} );

	// Blog Section > Settings > Section Subtitle
	wp.customize( 'latte_blogposts_subtitle', function( value ) {
		value.bind( function( newval ) {
			$('.blogposts .blog-header h3').text( newval );
		} );
	} );

	// Blog Section > Colors > Background Color
	wp.customize( 'latte_blogposts_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.blogposts').css( 'background', newval );
		} );
	} );

	// Blog Section > Colors > Title
	wp.customize( 'latte_blogposts_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.blogposts .blog-header h2').css( 'color', newval );
		} );
	} );

	// Blog Section > Colors > Subtitle
	wp.customize( 'latte_blogposts_subtitle_color', function( value ) {
		value.bind( function( newval ) {
			$('.blogposts .blog-header h3').css( 'color', newval );
		} );
	} );

	// Blog Section > Colors > Item Background
	wp.customize( 'latte_blogposts_item_background', function( value ) {
		value.bind( function( newval ) {
			$('.blogposts .blog-item .item').css( 'background', newval );
		} );
	} );

	// Blog Section > Colors > Item Text
	wp.customize( 'latte_blogposts_item_text', function( value ) {
		value.bind( function( newval ) {
			$('.blogposts .blog-item .item').css( 'color', newval );
		} );
	} );

	// Blog Section > Colors > Item Meta Text
	wp.customize( 'latte_blogposts_item_meta_text', function( value ) {
		value.bind( function( newval ) {
			$('.blogposts .blog-item .item .post-meta').css( 'color', newval );
		} );
	} );

	// Blog Section > Colors > Item Link
	wp.customize( 'latte_blogposts_item_link', function( value ) {
		value.bind( function( newval ) {
			$('.blogposts .blog-item .item a').css( 'color', newval );
			window.latte_blogposts_item_link = newval;
		} );
	} );

	// Blog Section > Colors > Item Link Hover
	wp.customize( 'latte_blogposts_item_link_hover', function( value ) {
		value.bind( function( newval ) {
			$('.blogposts .blog-item .item a').hover(function(){
				$(this).css( 'color', newval );
			},function(){
				$(this).css( 'color', latte_blogposts_item_link );
			});
		} );
	} );

	// Map Section > Colors > Background Color
	wp.customize( 'latte_map_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.map').css( 'background', newval );
		} );
	} );

	// Contact Section > Settings > Section Title
	wp.customize( 'latte_contact_title', function( value ) {
		value.bind( function( newval ) {
			$('.contact .contact-header h2').text( newval );
		} );
	} );

	// Contact Section > Settings > Section Subtitle
	wp.customize( 'latte_contact_subtitle', function( value ) {
		value.bind( function( newval ) {
			$('.contact .contact-header h3').text( newval );
		} );
	} );

	// Contact Section > Colors > Background Color
	wp.customize( 'latte_contact_background_color', function( value ) {
		value.bind( function( newval ) {
			$('.contact').css( 'background', newval );
		} );
	} );

	// Contact Section > Colors > Title
	wp.customize( 'latte_contact_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.contact .contact-header h2').css( 'color', newval );
		} );
	} );

	// Contact Section > Colors > Subtitle
	wp.customize( 'latte_contact_subtitle_color', function( value ) {
		value.bind( function( newval ) {
			$('.contact .contact-header h3').css( 'color', newval );
		} );
	} );

	// Blog Page > Header > Current Header
	wp.customize( 'header_image', function( value ) {
		value.bind( function( newval ) {
			$('.archive-header').css( 'background', 'transparent url(' +newval+ ') repeat scroll center center / cover' );
		} );
	} );

	// Blog Page > Header > Title
	wp.customize( 'latte_blog_title_color', function( value ) {
		value.bind( function( newval ) {
			$('.archive-header .cover-heading').css( 'color', newval );
			$('.archive-header .cover-heading a').css( 'color', newval );
		} );
	} );

	// Blog Page > Header > Subtitle
	wp.customize( 'latte_blog_description_color', function( value ) {
		value.bind( function( newval ) {
			$('.archive-header .lead').css( 'color', newval );
		} );
	} );

	// Blog Page > Header > Title
	wp.customize( 'latte_blog_heading_color', function( value ) {
		value.bind( function( newval ) {
			$('.container .item .post-title').css( 'color', newval );
			$('.sidebar h3').css( 'color', newval );
			window.latte_blog_heading_color = newval;
		} );
	} );

	// Blog Page > Colors > Text
	wp.customize( 'latte_blog_text_color', function( value ) {
		value.bind( function( newval ) {
			$('body').css( 'color', newval );
			$('h2.comments-title').css( 'color', newval );
			$('.comment-list .comment-content').css( 'color', newval );
			$('.comment-list .comment-author .fn a').css( 'color', newval );
			$('.container .pager li > a').css( 'color', newval );
			$('.container .pager a > li > span').css( 'color', newval );
			window.latte_blog_text_color = newval;
		} );
	} );

	// Blog Page > Colors > Meta
	wp.customize( 'latte_blog_meta_color', function( value ) {
		value.bind( function( newval ) {
			$('.container .item .post-meta').css( 'color', newval );
			$('.comment-list .comment-author .says').css( 'color', newval );
		} );
	} );

	// Blog Page > Colors > Meta Link
	wp.customize( 'latte_blog_meta_link_color', function( value ) {
		value.bind( function( newval ) {
			$('.container .item .post-meta a').css( 'color', newval );
			window.latte_blog_meta_link_color = newval;
		} );
	} );

	// Blog Page > Colors > Link
	wp.customize( 'latte_blog_link_color', function( value ) {
		value.bind( function( newval ) {	
			$('.container .item .post-content a').css( 'color', newval );
			$('.container .item .post-subtitle a').css( 'color', newval );
			$('.comment-list .comment-content a').css( 'color', newval );
			window.latte_blog_link_color = newval;
		} );
	} );

	// Blog Page > Colors > Link Hover
	wp.customize( 'latte_blog_link_hover_color', function( value ) {
		value.bind( function( newval ) {
			$('div.container.blog .post-content a').hover(function(){
				$(this).css( 'color', newval );
			},function(){
				$(this).css( 'color', latte_blog_link_color );
			});
			$('div.container.blog .post-content a').focus(function(){
				$(this).css( 'color', newval );
			},function(){
				$(this).css( 'color', latte_blog_link_color );
			});
			$('.container .item h2.post-title').hover(function(){
				$(this).css( 'color', newval );
			},function(){
				$(this).css( 'color', latte_blog_heading_color );
			});
			$('.container .item .post-meta a').hover(function(){
				$(this).css( 'color', newval );
			},function(){
				$(this).css( 'color', latte_blog_meta_link_color );
			});
			$('.container .item a').hover(function(){
				$(this).css( 'color', newval );
			},function(){
				$(this).css( 'color', latte_blog_link_color );
			});
			$('.container .pager li > span').css( 'color', newval );
			$('.container .pager li > span').hover(function(){
				$(this).css( 'color', newval );
			},function(){
				$(this).css( 'color', latte_blog_text_color );
			});
			$('.container .pager li > a').hover(function(){
				$(this).css( 'color', newval );
			},function(){
				$(this).css( 'color', latte_blog_text_color );
			});
			$('.comment-list .comment-content a').hover(function(){
				$(this).css( 'color', newval );
			},function(){
				$(this).css( 'color', latte_blog_link_color );
			});
		} );
	} );
	
} )( jQuery );
