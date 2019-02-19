$(function() {

	$('form[id="form"]').validate({

		rules : {

			name : "required",
			email : "required",
			number : "required",
			password : "required",

			email : {

				required : true,
				email : true
			},

			number : {

				required : true,
				number : true,
				minlength : 10,
				maxlength : 10
			},

			password : {

				required : true,
				minlength : 5,
				maxlength : 16

			},

			name : {

				required : true,
				minlength : 3,
				maxlength : 20
			},

		},
		submitHandler : function(form) {
			form.submit();
		}
	});
});

// add into html file
// <script
// src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
// <script
// src="https://cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min.js"></script>
//
// <script type="text/javascript" src="validation.js"></script>

