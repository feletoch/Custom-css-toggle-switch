$(function(){
	$(".toggle-switch label").on("click", function(){
		var parent = $(this).parent();
		
		if(parent.children("input").is(":checked")){
			parent.children("input").prop('checked', false);
		}else{
			parent.children("input").prop('checked', true);
		}
	});
});