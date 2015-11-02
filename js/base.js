;(function(){
	console.log("Hello!");

	$(".tile").click(function(){
		var ch = $(this).text();
		var replaceCh = "";
		var tileClass = "";

		if (ch === "•"){
			replaceCh = "O";
			tileClass = "circle";
		} 
		if (ch === "O"){
			replaceCh = "X";
			tileClass = "cross";
		} 
		if (ch === "X"){
			replaceCh = "•";
		} 

		$(this).text(replaceCh);
		$(this).removeClass("circle");
		$(this).removeClass("cross");
		$(this).addClass(tileClass);
	});
}());