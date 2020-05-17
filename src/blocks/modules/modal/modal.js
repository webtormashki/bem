import jQuery from "jquery";

$('[data-modal=consultation]').on('click', function() {
	$('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
	$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.btn_small').on('click', function() {
	$('.overlay, #order').fadeIn('slow');
});
