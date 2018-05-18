(function ($) {
    "use strict";

    
	
    $('.navbar-toggler').on('click', function () {
        $(this).toggleClass('open');
    });
	$('#navbarCollapse').on('show.bs.offcanvas', function (e) {
		$('.navbar-toggler').addClass('open');
		$('body').css('width', $(window).innerWidth()+'px');
	});
	$('#navbarCollapse').on('hide.bs.offcanvas', function (e) {
		$('.navbar-toggler').removeClass('open');
		$('body').css('overflow', 'auto'); 
		$('body').css('width', 'auto');
		$('body').css('width', '');
		
	})
   $(window).on('resize', function () {
	   $('body').css('width', '');
   });
    $('.scrolltop').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /**auto close navbar-collapse on click a**/
    $('[data-scroll]').on('click', function () {
        $('.navbar-toggler:visible').click();
    });
    /**navbar sticky **/
    $(window).on('scroll', function () {
        var winTop = $(window).scrollTop();
        if (winTop >= 100) {
            $(".navbar-sticky").addClass("sticky-active");
        } else {
            $(".navbar-sticky").removeClass("sticky-active");
        }
        //back to top
        if ($(this).scrollTop() > 500) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }

    });
    /**preloader **/
    $(window).on('load', function () {
        $('#preloader').addClass('d-none');
    });



    /**validate mc form on keyup and submit**/
    $("#mc-form").validate({
        rules: {
            mc_email: {
                required: true,
                email: true
            },
        },
        messages: {
            mc_email: "Please enter a valid email address",
        },
        submitHandler: function () {
            var form = $("#mc-form");
            $.ajax({
                type: "POST",
                url: form.attr("action"),
                data: form.serialize(),
                success: function (response) {
                    //alert(response);
                    $('#mc-form')[0].reset();
                    $("#mc-result").html(response);
                }
            });
        }
    });

    /**animation**/
    window.wow = new WOW(
            {
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            }
    );
    window.wow.init();

    /**smooth scroll**/
    var scroll = new SmoothScroll('[data-scroll]', {
        // Selectors
        ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
        header: '.navbar', // Selector for fixed headers (must be a valid CSS selector)
        // Speed & Easing
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
        easing: 'easeInOutCubic', // Easing pattern to use
        customEasing: function (time) {
        }, // Function. Custom easing pattern

        // Callback API
        before: function () {
        }, // Callback to run before scroll
        after: function () {
        } // Callback to run after scroll
    });
 
}(jQuery));
