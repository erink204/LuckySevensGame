function playGame() {

    var startingBet = document.forms['luckySevens']['startingBet'].value;
    
	
	
	if (startingBet <= 0) {
        alert('Error: Starting bet amount must be more than $0.00.')
    }   
   
   
   
    var gameCash = Number(startingBet);
    var numberOfRolls = 0;
    var highestWon = Number(startingBet);
    var rollsAtHighest = 0;
    
    while (gameCash > 0) {
        
       
   
    var sumOfDice = rollDice();       
        numberOfRolls ++;
        
    if (sumOfDice === 7) {
        gameCash += 4;
            
			
    if (gameCash > highestWon) {
        highestWon = gameCash;
        rollsAtHighest = numberOfRolls;
            }
        }
        else {
            gameCash -= 1;
        }
    }
    
//Rolling Dice 
    function rollDice() {
        var dice1 = Math.ceil(Math.random() * (1 + 6 - 1));
        var dice2 = Math.ceil(Math.random() * (1 + 6 - 1));
        return dice1 + dice2;
    }	
    
//Table Data set in HTML
    
    if (startingBet > 0) {
        document.getElementById("starting-bet-value").innerText = "$" + parseFloat(Math.round(startingBet * 100) / 100).toFixed(2);
        
        document.getElementById("total-rolls").innerText = numberOfRolls;
        
        document.getElementById("highest-amount").innerText = '$' + parseFloat(Math.round(highestWon * 100) / 100).toFixed(2);
        
        document.getElementById("rolls-at-highest").innerText = rollsAtHighest;
		
		document.getElementById("submitButton").innerText = 'Play Again!';
    }
    return false;
}
 


