document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositeField = document.getElementById('deposit-field');
    const newDepositAmountString = depositeField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositeField.value = '';

    if(isNaN(newDepositAmount)){
        alert('please provite a vlaid number')
        return;
    }
    
    const amountAddElements = document.getElementById('deposite-update');
    const previousAmountAddString = amountAddElements.innerText;
    const previousAmountAdd = parseFloat(previousAmountAddString);
    amountAddElements.innerText = newDepositAmount + previousAmountAdd;

    const balanceAddElements = document.getElementById('balance-update');
    const previousBalanceAddString = balanceAddElements.innerText;
    const previousBalanceAdd = parseFloat(previousBalanceAddString);
    balanceAddElements.innerText = newDepositAmount + previousBalanceAdd ;

    

})