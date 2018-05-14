$('ul').on("click", "li", function(){
	$(this).toggleClass("completed");
})

//Fades and removes <li> when "X" is clicked

$('ul').on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		var textTodo = $(this).val();
		$(this).val("");
		$('ul').append("<li><span><i class='fa fa-trash'></i></span>" + textTodo + "</li>")
	}
})

$("h1").on("click", ".fa-plus", function(){
 $("input[type='text']").fadeToggle();
});