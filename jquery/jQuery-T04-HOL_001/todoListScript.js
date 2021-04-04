$(document).ready(function(){
	$('#add').click(function(){
		$('div').append('<p>'+$("#task").val()+'</p>');
		$("#task").val("")
	})
})