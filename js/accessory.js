  

$("#menu_icon" ).on( "click", function() {
    $('.navbar').toggleClass('active');
});

$( "#search-icon" ).on( "click", function() {
$('.search-box').toggleClass('active');
});




$(window).scroll(function fix_element() {
$('header').css(
$(window).scrollTop() > 69
    ? { 'background-color': '#fff'}
    : { 'background-color': 'transparent' }
);
return fix_element;
}());