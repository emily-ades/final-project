$('.nav-tabs li').on('click', function() {
    $('.nav-tabs').children().removeClass('active');
    $(this).addClass('active');
});