import jQuery from 'jquery';
import validate from 'jquery-validation';

function validateForms(form){
	$(form).validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			phone: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: {
				required: "Пожалуйста, введите свое имя",
				minlength: jQuery.validator.format("Введите {0} символа!")
			  },
			phone: "Пожалуйста, введите свой номер телефона",
			email: {
			  required: "Пожалуйста, введите свою почту",
			  email: "Неправильно введен адрес почты"
			}
		}
	});
};

validateForms('#consultation-form');
validateForms('#consultation form');
validateForms('#order form');