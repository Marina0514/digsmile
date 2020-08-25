$(function() {

$('#burger').click(function() {

$('.menu-modal').slideDown();
$('#burger').hide();

});


$('.fa-times').click(function() {

  $('.menu-modal').slideUp();
  $('#burger').show();
});

})
