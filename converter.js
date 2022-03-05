let conversion = "";

let convertedAmount = "";

let transaction = "";

let prefix_to = "";

let amount = "";


function start() {

    amount = prompt("Enter Amount: ");
    amount = parseFloat(amount);

    let enteredAmount = document.querySelector("#amountToBeConverted");
    enteredAmount.innerHTML = `${amount.toFixed(2)}`;

    return(amount);


}

const dollarsToEuros = (amount) => {

    transaction = "Dollars to Euros";

    prefix_to = '&euro;'

    convertedAmount = (amount * 0.89);
    convertedAmount = parseFloat(convertedAmount);
    convertedAmount = convertedAmount.toFixed(2);
    amount = convertedAmount;
    
    return(convertedAmount);

}

function eurosToDollars(amount) {

    transaction = "Euros to Dollars";

    prefix_to = "$";

    convertedAmount = (amount /0.89);
    convertedAmount = parseFloat(convertedAmount);
    convertedAmount = convertedAmount.toFixed(2);
    //amount = convertedAmount

    return(convertedAmount);

}



const displayRecord = function(transaction, amount) {

    let display = document.querySelector("#transaction");
    let totalsDisplay = document.querySelector("#totals");
    display.innerHTML = transaction;
    totalsDisplay.innerHTML = amount;

}


const convert = (callback) => {

    callback(amount);
    value = amount;
    displayRecord(transaction, `${prefix_to}${convertedAmount}`);
    return(value);

}


