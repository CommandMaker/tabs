jQuery(function ($) {
    $('#menu').click(function (e) {
        e.stopPropagation();
        $('body').toggleClass('has-sidebar');
    });

    $('body').click(function () {
        $('body').removeClass('has-sidebar');
    });
});