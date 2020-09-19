console.log('%c This site uses the Titan web template. Proudly Crafted with ZiOn.', 'background: #222; color: #bada55');

/* ---------------------------------------------- /*
 * Preloader
 /* ---------------------------------------------- */
(function(){
    $(window).on('load', function() {
        $('.loader').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
    });

    $(document).ready(function() {

        /* ---------------------------------------------- /*
         * WOW Animation When You Scroll
         /* ---------------------------------------------- */

        wow = new WOW({
            mobile: false
        });
        wow.init();


        /* ---------------------------------------------- /*
         * Scroll top
         /* ---------------------------------------------- */

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

        $('a[href="#totop"]').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });


        /* ---------------------------------------------- /*
         * Initialization General Scripts for all pages
         /* ---------------------------------------------- */

        var homeSection = $('.home-section'),
            navbar      = $('.navbar-custom'),
            navHeight   = navbar.height(),
            worksgrid   = $('#works-grid'),
            width       = Math.max($(window).width(), window.innerWidth),
            mobileTest  = false;

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            mobileTest = true;
        }

        buildHomeSection(homeSection);
        navbarAnimation(navbar, homeSection, navHeight);
        navbarSubmenu(width);
        hoverDropdown(width, mobileTest);

        $(window).resize(function() {
            var width = Math.max($(window).width(), window.innerWidth);
            buildHomeSection(homeSection);
            hoverDropdown(width, mobileTest);
        });

        $(window).scroll(function() {
            effectsHomeSection(homeSection, this);
            navbarAnimation(navbar, homeSection, navHeight);
        });
        
        /* ---------------------------------------------- /*
	    * Load images HTML into works grid 
	    /* ---------------------------------------------- */
        
        // Wildlife 
        if (worksgrid.hasClass('wildlife')) {	        
	        $.each(descriptions.wildlife, function(i, f) {
	        	var listItem = "<li class='work-item work-item-gallery " + f.tags + "'><a href=\"assets/images/bk/wildlife/" + f.id + ".JPG\" title=\"<div class=&quot;work-details&quot;><h5 class=&quot;work-details-title gallery-title font-alt&quot;>" + f.imageTitle + "</h5><p>" + f.description + "</p><ul><li><strong>Date: </strong><span class=&quot;font-serif&quot;>" + f.dateTaken + "</span></li><li><strong>Location: </strong><span class=&quot;font-serif&quot;>" + f.location + "</span></li></ul> </div>\"><div class=\"work-image\" title=\"" + f.imageTitle + "\"><img src=\"assets/images/bk/wildlife/thumbnails/" + f.id + ".JPG\" alt=\"" + f.imageTitle + "\"/></div></a></li>";
                $(listItem).appendTo("#works-grid");
        	});
        }
        
        // Adventure 
        if (worksgrid.hasClass('adventure')) {	        
	        $.each(descriptions.adventure, function(i, f) {
	        	var listItem = "<li class='work-item work-item-gallery " + f.tags + "'><a href=\"assets/images/bk/adventure/" + f.id + ".JPG\" title=\"<div class=&quot;work-details&quot;><h5 class=&quot;work-details-title gallery-title font-alt&quot;>" + f.imageTitle + "</h5><p>" + f.description + "</p><ul><li><strong>Date: </strong><span class=&quot;font-serif&quot;>" + f.dateTaken + "</span></li><li><strong>Location: </strong><span class=&quot;font-serif&quot;>" + f.location + "</span></li></ul> </div>\"><div class=\"work-image\" title=\"" + f.imageTitle + "\"><img src=\"assets/images/bk/adventure/thumbnails/" + f.id + ".JPG\" alt=\"" + f.imageTitle + "\"/></div></a></li>";
                $(listItem).appendTo("#works-grid");
        	});
        }
        
        // Ice 
        if (worksgrid.hasClass('ice')) {	        
	        $.each(descriptions.ice, function(i, f) {
	        	var listItem = "<li class='work-item work-item-gallery " + f.tags + "'><a href=\"assets/images/bk/ice/" + f.id + ".JPG\" title=\"<div class=&quot;work-details&quot;><h5 class=&quot;work-details-title gallery-title font-alt&quot;>" + f.imageTitle + "</h5><p>" + f.description + "</p><ul><li><strong>Date: </strong><span class=&quot;font-serif&quot;>" + f.dateTaken + "</span></li><li><strong>Location: </strong><span class=&quot;font-serif&quot;>" + f.location + "</span></li></ul> </div>\"><div class=\"work-image\" title=\"" + f.imageTitle + "\"><img src=\"assets/images/bk/ice/thumbnails/" + f.id + ".JPG\" alt=\"" + f.imageTitle + "\"/></div></a></li>";
                $(listItem).appendTo("#works-grid");
        	});
        }
        
        // Landscapes 
        if (worksgrid.hasClass('landscape')) {	        
	        $.each(descriptions.landscape, function(i, f) {
	        	var listItem = "<li class='work-item work-item-gallery " + f.tags + "'><a href=\"assets/images/bk/landscape/" + f.id + ".JPG\" title=\"<div class=&quot;work-details&quot;><h5 class=&quot;work-details-title gallery-title font-alt&quot;>" + f.imageTitle + "</h5><p>" + f.description + "</p><ul><li><strong>Date: </strong><span class=&quot;font-serif&quot;>" + f.dateTaken + "</span></li><li><strong>Location: </strong><span class=&quot;font-serif&quot;>" + f.location + "</span></li></ul> </div>\"><div class=\"work-image\" title=\"" + f.imageTitle + "\"><img src=\"assets/images/bk/landscape/thumbnails/" + f.id + ".JPG\" alt=\"" + f.imageTitle + "\"/></div></a></li>";
                $(listItem).appendTo("#works-grid");
        	});
        }
        
        // Rapid - TEMP 
        if (worksgrid.hasClass('paddlingmag')) {	
	        $.each(descriptions.paddlingmag, function(i, f) {
	        	var listItem = "<li class='work-item work-item-gallery-nodesc " + f.tags + "'><a href=\"assets/images/bk/paddlingmag/" + f.id + ".JPG\" title=\"<div class=&quot;work-details&quot;><h5 class=&quot;work-details-title gallery-title font-alt&quot;>" + f.imageTitle + "</h5><p>" + f.description + "</p><ul><li><strong>Date: </strong><span class=&quot;font-serif&quot;>" + f.dateTaken + "</span></li><li><strong>Location: </strong><span class=&quot;font-serif&quot;>" + f.location + "</span></li></ul> </div>\"><div class=\"work-image\" title=\"" + f.imageTitle + "\"><img src=\"assets/images/bk/paddlingmag/thumbnails/" + f.id + ".JPG\" alt=\"" + f.imageTitle + "\"/></div></a></li>";
                $(listItem).appendTo("#works-grid");
        	});
/*
	        $.each(descriptions.rapid, function(i, f) {
	        	var listItem = "<li class='work-item work-item-gallery-nodesc" + f.tags + "'><a href=\"assets/images/bk/paddlingmag/" + f.id + ".JPG\"><div class=\"work-image\" title=\"" + f.location + "\"><img src=\"assets/images/bk/paddlingmag/thumbnails/" + f.id + ".JPG\" alt=\"" + f.location + "\"/></div><div class=\"work-caption font-alt\"><h3 class=\"work-descr\">" + f.location + "</h3></div></a></li>";
                $(listItem).appendTo("#works-grid");
        	});
*/
        }
        
        

        /* ---------------------------------------------- /*
         * Set sections backgrounds
         /* ---------------------------------------------- */

        var module = $('.home-section, .module, .module-small, .side-image');
        module.each(function(i) {
            if ($(this).attr('data-background')) {
                $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
            }
        });

        /* ---------------------------------------------- /*
         * Home section height
         /* ---------------------------------------------- */

        function buildHomeSection(homeSection) {
            if (homeSection.length > 0) {
                if (homeSection.hasClass('home-full-height')) {
                    homeSection.height($(window).height());
                } else {
                    homeSection.height($(window).height() * 0.85);
                }
            }
        }


        /* ---------------------------------------------- /*
         * Home section effects
         /* ---------------------------------------------- */

        function effectsHomeSection(homeSection, scrollTopp) {
            if (homeSection.length > 0) {
                var homeSHeight = homeSection.height();
                var topScroll = $(document).scrollTop();
                if ((homeSection.hasClass('home-parallax')) && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                    homeSection.css('top', (topScroll * 0.55));
                }
                if (homeSection.hasClass('home-fade') && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                    var caption = $('.caption-content');
                    caption.css('opacity', (1 - topScroll/homeSection.height() * 1));
                }
            }
        }

        /* ---------------------------------------------- /*
         * Intro slider setup
         /* ---------------------------------------------- */

        if( $('.hero-slider').length > 0 ) {
            $('.hero-slider').flexslider( {
                animation: "fade",
                animationSpeed: 1000,
                animationLoop: true,
                prevText: '',
                nextText: '',
                before: function(slider) {
                    $('.titan-caption').fadeOut().animate({top:'-80px'},{queue:false, easing: 'swing', duration: 700});
                    slider.slides.eq(slider.currentSlide).delay(500);
                    slider.slides.eq(slider.animatingTo).delay(500);
                },
                after: function(slider) {
                    $('.titan-caption').fadeIn().animate({top:'0'},{queue:false, easing: 'swing', duration: 700});
                },
                useCSS: true
            });
        }


        /* ---------------------------------------------- /*
         * Rotate
         /* ---------------------------------------------- */

        $(".rotate").textrotator({
            animation: "dissolve",
            separator: "|",
            speed: 3000
        });


        /* ---------------------------------------------- /*
         * Transparent navbar animation
         /* ---------------------------------------------- */

        function navbarAnimation(navbar, homeSection, navHeight) {
            var topScroll = $(window).scrollTop();
            if (navbar.length > 0 && homeSection.length > 0) {
                if(topScroll >= navHeight) {
                    navbar.removeClass('navbar-transparent');
                } else {
                    navbar.addClass('navbar-transparent');
                }
            }
        }

        /* ---------------------------------------------- /*
         * Navbar submenu
         /* ---------------------------------------------- */

        function navbarSubmenu(width) {
            if (width > 767) {
                $('.navbar-custom .navbar-nav > li.dropdown').hover(function() {
                    var MenuLeftOffset  = $('.dropdown-menu', $(this)).offset().left;
                    var Menu1LevelWidth = $('.dropdown-menu', $(this)).width();
                    if (width - MenuLeftOffset < Menu1LevelWidth * 2) {
                        $(this).children('.dropdown-menu').addClass('leftauto');
                    } else {
                        $(this).children('.dropdown-menu').removeClass('leftauto');
                    }
                    if ($('.dropdown', $(this)).length > 0) {
                        var Menu2LevelWidth = $('.dropdown-menu', $(this)).width();
                        if (width - MenuLeftOffset - Menu1LevelWidth < Menu2LevelWidth) {
                            $(this).children('.dropdown-menu').addClass('left-side');
                        } else {
                            $(this).children('.dropdown-menu').removeClass('left-side');
                        }
                    }
                });
            }
        }

        /* ---------------------------------------------- /*
         * Navbar hover dropdown on desctop
         /* ---------------------------------------------- */

        function hoverDropdown(width, mobileTest) {
            if ((width > 767) && (mobileTest !== true)) {
                $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').removeClass('open');
                var delay = 0;
                var setTimeoutConst;
                $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').hover(function() {
                        var $this = $(this);
                        setTimeoutConst = setTimeout(function() {
                            $this.addClass('open');
                            $this.find('.dropdown-toggle').addClass('disabled');
                        }, delay);
                    },
                    function() {
                        clearTimeout(setTimeoutConst);
                        $(this).removeClass('open');
                        $(this).find('.dropdown-toggle').removeClass('disabled');
                    });
            } else {
                $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').unbind('mouseenter mouseleave');
                $('.navbar-custom [data-toggle=dropdown]').not('.binded').addClass('binded').on('click', function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    $(this).parent().siblings().removeClass('open');
                    $(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
                    $(this).parent().toggleClass('open');
                });
            }
        }

        /* ---------------------------------------------- /*
         * Navbar collapse on click
         /* ---------------------------------------------- */

        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });


        /* ---------------------------------------------- /*
         * Video popup, Gallery
         /* ---------------------------------------------- */

        $('.video-pop-up').magnificPopup({
            type: 'iframe'
        });

        $(".gallery-item").magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1]
            },
            image: {
                titleSrc: 'title',
                tError: 'The image could not be loaded.'
            }
        });
        
        $(".work-item-gallery").magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1]
            },
            image: {
	            markup: '<div class="mfp-figure">'+
				            '<div class="mfp-close"></div>'+
				            '<div class="mfp-img"></div>'+ // Floated left
				            '<div class="mfp-title"></div>'+ // This is floated right shows up on the right side
				            '<div class="mfp-bottom-bar">'+
				              '<div class="mfp-counter"></div>'+
				            '</div>'+
				          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

			   verticalFit: true, // Fits image in area vertically
                titleSrc: 'title',
/*
                titleSrc: function(item) {
	               return "<div class=&quot;work-details&quot;><h5 class=&quot;work-details-title gallery-title font-alt&quot;>" + 
		            item.el.attr('img-title') +
		            "</h5><p>" + 
		            item.el.attr('img-description') + 
		            "</p><ul><li><strong>Camera: </strong> <span class=&quot;font-serif&quot;>" + 
		             item.el.attr('img-camera') +        
		            "</span></li><li><strong>Date: </strong><span class=&quot;font-serif&quot;>" + 
					item.el.attr('img-date') +
					"</span></li></ul></div>";
*/
// 				},
                tError: 'The image could not be loaded.',
                preloader: true
            }
        });
        
        
        // ANDREA - ADDED SEPT 18 2020 - can remove later 
        
        $(".work-item-gallery-nodesc").magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1]
            },
            image: {
	            markup: '<div class="mfp-figure">'+
				            '<div class="mfp-close"></div>'+
				            '<div class="mfp-img"></div>'+ // Floated left
				            '<div class="mfp-bottom-bar">'+
				              '<div class="mfp-counter"></div>'+
				              '<div class="mfp-title"></div>' +
				            '</div>'+
				          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

			   verticalFit: true, // Fits image in area vertically
                titleSrc: 'title',
                tError: 'The image could not be loaded.',
                preloader: true
            }
        });


        /* ---------------------------------------------- /*
         * Portfolio
         /* ---------------------------------------------- */

        var worksgrid   = $('#works-grid'),
            worksgrid_mode;
            
        
            
            

        if (worksgrid.hasClass('works-grid-masonry')) {
            worksgrid_mode = 'masonry';
        } else {
            worksgrid_mode = 'fitRows';
        }

        worksgrid.imagesLoaded(function() {
            worksgrid.isotope({
                layoutMode: worksgrid_mode,
/*
                layoutMode: 'cellsByRow',
				cellsByRow: {
				    columnWidth: 240,
				    rowHeight: 360
				 }
*/
                itemSelector: '.work-item'
            });
        });

        $('#filters a').click(function() {
            $('#filters .current').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');

            worksgrid.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            return false;
        });

        /* ---------------------------------------------- /*
         * Post Slider
         /* ---------------------------------------------- */

        if ($('.post-images-slider').length > 0 ) {
            $('.post-images-slider').flexslider( {
                animation: "slide",
                smoothHeight: true,
            });
        }


        /* ---------------------------------------------- /*
         * Progress bar animations
         /* ---------------------------------------------- */

        $('.progress-bar').each(function(i) {
            $(this).appear(function() {
                var percent = $(this).attr('aria-valuenow');
                $(this).animate({'width' : percent + '%'});
                $(this).find('span').animate({'opacity' : 1}, 900);
                $(this).find('span').countTo({from: 0, to: percent, speed: 900, refreshInterval: 30});
            });
        });


        /* ---------------------------------------------- /*
         * Funfact Count-up
         /* ---------------------------------------------- */

        $('.count-item').each(function(i) {
            $(this).appear(function() {
                var number = $(this).find('.count-to').data('countto');
                $(this).find('.count-to').countTo({from: 0, to: number, speed: 1200, refreshInterval: 30});
            });
        });


        /* ---------------------------------------------- /*
         * Youtube video background
         /* ---------------------------------------------- */

        $(function(){
            $(".video-player").mb_YTPlayer();
        });

        $('#video-play').click(function(event) {
            event.preventDefault();
            if ($(this).hasClass('fa-play')) {
                $('.video-player').playYTP();
            } else {
                $('.video-player').pauseYTP();
            }
            $(this).toggleClass('fa-play fa-pause');
            return false;
        });

        $('#video-volume').click(function(event) {
            event.preventDefault();
            if ($(this).hasClass('fa-volume-off')) {
                $('.video-player').YTPUnmute();
            } else {
                $('.video-player').YTPMute();
            }
            $(this).toggleClass('fa-volume-off fa-volume-up');
            return false;
        });


        /* ---------------------------------------------- /*
         * Owl Carousel
         /* ---------------------------------------------- */

        $('.owl-carousel').each(function(i) {

            // Check items number
            if ($(this).data('items') > 0) {
                items = $(this).data('items');
            } else {
                items = 4;
            }

            // Check pagination true/false
            if (($(this).data('pagination') > 0) && ($(this).data('pagination') === true)) {
                pagination = true;
            } else {
                pagination = false;
            }

            // Check navigation true/false
            if (($(this).data('navigation') > 0) && ($(this).data('navigation') === true)) {
                navigation = true;
            } else {
                navigation = false;
            }

            // Build carousel
            $(this).owlCarousel( {
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                nav: navigation,
                dots: pagination,
                loop: true,
                dotsSpeed: 400,
                items: items,
                navSpeed: 300,
                autoplay: 2000
            });

        });


        /* ---------------------------------------------- /*
         * Blog masonry
         /* ---------------------------------------------- */

        $('.post-masonry').imagesLoaded(function() {
            $('.post-masonry').masonry();
        });


        /* ---------------------------------------------- /*
         * Scroll Animation
         /* ---------------------------------------------- */

        $('.section-scroll').bind('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });



    });
})(jQuery);


