$(function(){

	$('#sign-up-form').validate({
		rules: {
			name:{
				required: true
			},
			email: {
				required: true,
				email: true
			},
			password: {
				minlength:3,
				required: true
			},
			confirmation: {
				minlength: 3,
				equalTo: "#password"
			}
		},
		success: function(element){
			element
			.text('ok').addClass('valid')
		}
	});
});