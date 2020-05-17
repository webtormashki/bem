
import jQuery from "jquery";

$('[data-modal=order]').on('click', function() {
	$('.overlay, #order').fadeIn('slow');
});
$('.modal__close').on('click', function() {
	$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});
