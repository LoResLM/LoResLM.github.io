$(document).ready(function() {
    // Handle hover for desktop
    $('.dropdown-submenu > a').on('mouseenter', function(e) {
        if ($(window).width() > 992) { // Only on desktop
            var $submenu = $(this).next('.dropdown-menu');
            $submenu.addClass('show');
        }
    });

    // Handle mouse leave for submenu
    $('.dropdown-submenu').on('mouseleave', function(e) {
        if ($(window).width() > 992) {
            $(this).find('.dropdown-menu').removeClass('show');
        }
    });

    // Handle click for mobile
    $('.dropdown-submenu > a').on('click', function(e) {
        if ($(window).width() <= 992) { // Only on mobile/tablet
            e.preventDefault();
            e.stopPropagation();

            var $submenu = $(this).next('.dropdown-menu');

            // Close other submenus
            $('.dropdown-submenu .dropdown-menu').not($submenu).removeClass('show');

            // Toggle current submenu
            $submenu.toggleClass('show');
        }
    });

    // Close all dropdowns when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown-menu').removeClass('show');
        }
    });
});