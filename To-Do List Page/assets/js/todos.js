//Check off todos by clicking
$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){ //this is span
		$(this).remove();   //this is parent()
	});
	event.stopPropagation();
});

//Grabbing input text
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todotext = $(this).val();
		$(this).val("");
		//create new li and add to the end
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+ todotext + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});