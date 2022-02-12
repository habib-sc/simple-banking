// Input function
function getBankingInput(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const input = parseFloat(inputField.value);
    // Clearing input field 
    inputField.value = '';
    return input;
}

// Current balance function
function getCurrentBalance() {
    const balanceText = document.getElementById('total-balance');
    const balance = parseFloat(balanceText.innerText);
    return balance;
}

// Update total function 
function updateTotalAmount(totalFieldId, amount) {
    const totalAmountText = document.getElementById(totalFieldId);
    const totalAmount = parseFloat(totalAmountText.innerText);
    // Getting previous amount
    const previousTotalAmount = totalAmount;
    // Assigning latest total amount
    totalAmountText.innerText = previousTotalAmount + amount;
    return totalAmountText.innerText;
}

// Update balance function 
function updateBalance(amount, plusMinus) {
    const totalBalanceText = document.getElementById('total-balance');
    const totalBalance = getCurrentBalance();
    // Assigning latest balance  
    if (plusMinus == true) {
        totalBalanceText.innerText = totalBalance + amount;
    } else {
        totalBalanceText.innerText = totalBalance - amount;
    }
}

// Deposit Handler 
document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositAmount = getBankingInput('deposit-field');
    if (depositAmount > 0) {
        // Updating Deposit 
        updateTotalAmount('total-deposit', depositAmount);
        // Updating balance 
        updateBalance(depositAmount, true);
    } else {
        alert('Please input a valid number! You can input any positive numbers only.')
    }
})

// Withdraw Handler 
document.getElementById('withdraw-btn').addEventListener('click', function() {
    const currentBalance = getCurrentBalance();
    const withdrawAmount = getBankingInput('withdraw-field');
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        // Update total withdraw 
        updateTotalAmount('total-withdraw', withdrawAmount);
        // Updating balance 
        updateBalance(withdrawAmount);
    } else {
        alert('Please input withdraw amount greater than 0 and smaller than your current account balance.')
    }
})