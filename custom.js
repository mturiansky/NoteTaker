$(document).ready(function() {
    var sect_id = 0;
    $('section').each(function() {
        $(this).attr('id', String(sect_id));
        $('.dropdown-menu').append('<li><a href=\#' + String(sect_id) + '>' + $(this).find($('h1')).text() + '</a></li>');
        sect_id += 1;
    });

    $("a[href^='#']").on('click', function(e) {
       e.preventDefault();
       var hash = this.hash;
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top
       }, 500, function(){
           window.location.hash = hash;
       });
    });
});

//this function is used to change the active link in the navbar in accordance
//with how far down the page the user has scrolled
$(document).scroll(function() {
    var t = $(this).scrollTop() + $(window).height() / 3;
    $('section').each(function() {
        if(t >= $(this).position().top) {
            $('.current_section').text($(this).find($('h1')).text());
        }
    });
});
