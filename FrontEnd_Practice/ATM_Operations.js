
var balance=10000;

function Deposit(){
	var amount=parseInt(prompt("Enter the amount to Deposit"));
    balance=balance+amount;
	document.write(balance);
}

function Withdraw(){
	var amount=parseInt(prompt("Enter the amount to withdraw"));
	balance=(balance-amount);
	document.write(balance);
}
function ViewBalnce(){
	document.write(balance);
}