$(document).ready(function(){



	function add(){
		var string = $("input").val();
		if(string == 0)
		{
			string = 'Haven\'t thought of anything!';
		}
		console.log(string);
		$("input").first().val("");
		var newContent = '<div class="tasks"><i class="fa fa-trash-o action" aria-hidden="true" > </i><span class="description">'+ string 
		+ '	</div>';
		$("#containsTodo").append(newContent);
	}

	$(".btn").on("click",function(){
		add();
	});


	$("input").on("keypress",function(event){
		if(event.which == 13)
			add();
	})
	.on("focus",function(){
		$(this).css("outline","none");
	})

	if(jQuery)
	{
		alert("connected");
	}

	$("#containsTodo").on("click",".action",function(){
		$(this).parent().slideUp(500);
	})
	.on("click",".description",function(){
		$(this).toggleClass("done");
	})
	.on("mouseenter",".tasks",function(){
		var i= $(this).index()-1;
		$(".action").eq(i).fadeIn(500);
	})
	.on("mouseleave",".tasks",function(){
		var i= $(this).index()-1;
		$(".action").eq(i).fadeOut(00);
	})
})
