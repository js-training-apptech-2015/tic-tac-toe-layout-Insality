;(function(){
	console.log("Hello!");

	var turnCounter = 0;
	var prevTurn = "O";
	var currentTurn = "X";
	var playerCrossScore = 0;
	var playerCircleScore = 0;
	var field = [];

	function refillField(){
		field = [];
		$(".tile").each(function(){
			if ($(this).text() == "•"){
				field.push(field.length);
			} else{
				field.push($(this).text());
			}
		});
	};

	refillField();
	console.log(field);

	// Events:
	$(".tile").click(function(){
		var ch = $(this).text();

		var replaceCh = "";
		var tileClass = "";

		if (ch === "•"){
			if (currentTurn === "X"){
				replaceCh = "X";
				tileClass = "cross";
				prevTurn = "X";
				currentTurn = "O";
			} else {
				replaceCh = "O";
				tileClass = "circle";
				prevTurn = "O";
				currentTurn = "X";
			}

			$(this).text(replaceCh);
			$(this).removeClass("circle");
			$(this).removeClass("cross");
			$(this).addClass(tileClass);

			turnCounter++;
			refillField();
			checkField();
		}
	});

	$("#new-game").click(newGame);

	function newGame(){
		refillGameBoard();
		$("#player-cross").text(0);
		$("#player-circle").text(0);
	};

	function refillGameBoard(){
		$(".tile").each(function(){
			$(this).text("•");
			$(this).removeClass("circle");
			$(this).removeClass("cross");
		})

		turnCounter = 0;
		prevTurn = "O";
		currentTurn = "X";
		field = [];
	}

	function checkField(){
		for (var i = 0; i < 3; ++i){
			// row:
			if ( field[(3*i)] === field[(3*i)+1] && 
				 field[(3*i)+1] === field[(3*i)+2]){
				winGame();
				return;
			}

			// col:
			if ( field[i] === field[i+3] && 
				 field[(i+3)] === field[i+6]){
				winGame();
			return;
			}
		}

		// cross:
		if (field[0] === field[4] && field[4] === field[8]) { 
			winGame(); 
			return;
		}
		if (field[2] === field[4] && field[4] === field[6]) {
			winGame(); 
			return;
		}

		if (turnCounter >= 9) drawGame();
	}


	function winGame(){
		console.log("Win game: " + prevTurn);

		if (prevTurn == "X"){
			playerCrossScore += 2;
		} else{
			playerCircleScore += 2;
		};

		refreshScore();
		refillGameBoard();
	}

	function refreshScore(){
		$("#player-cross").text( playerCrossScore );
		$("#player-circle").text( playerCircleScore );

	}

	function drawGame(){
		console.log("Draw game!");
		playerCircleScore++;
		playerCrossScore++;

		refreshScore();
		refillGameBoard();
	}
}());