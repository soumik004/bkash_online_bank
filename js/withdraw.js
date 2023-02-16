document.getElementById('btn-withdraw').addEventListener('click', function(){

    const newWithdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = newWithdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawFieldString);

    newWithdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provite a vlaid number')
        return;
    }
    const previousWithdrawField = document.getElementById('withdraw-update');
    const previousWithdrawFieldString = previousWithdrawField.innerText;
    
    const balanceAddField = document.getElementById('balance-update');
    const previousBalanceAddString = balanceAddField.innerText;
    const previousBalanceAdd = parseFloat(previousBalanceAddString);

    if(newWithdrawAmount > previousBalanceAdd){
        alert('you have not sufficient blance')
        return;
    }

    const previousWithdrawAmount = parseFloat(previousWithdrawFieldString);
    previousWithdrawField.innerText = newWithdrawAmount + previousWithdrawAmount ;

    balanceAddField.innerText = previousBalanceAdd - newWithdrawAmount; 

 })
 document.getElementById('btn-logout').addEventListener('click', function(){
     window.location.href = 'login.html';

        
 })