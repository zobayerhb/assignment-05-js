document.getElementById("donate-button").addEventListener('click', function(event){
    event.preventDefault();
    
    // donation input
    const donateInput = document.getElementById("input-donate-number").value;
    const donateInputNumber = parseFloat(donateInput);

    // check is input value number or not 
    if(isNaN(donateInputNumber) || donateInputNumber <= 0){
        alert("Your input number is not valid! Please try again...")
        return;
    };

    // donation balance check
    const currentDonation = document.getElementById("current-donation").innerText;
    const currentDonationConNum = parseFloat(currentDonation);
    const newBalanceAfterDonate = currentDonationConNum + donateInputNumber;

    // my current balance check
    const myAccountBalance = document.getElementById("my-account-balance").innerText;
    const myAccountBalanceNum = parseFloat(myAccountBalance);

    if( donateInputNumber > myAccountBalanceNum){
        alert("You don't have money");
        return;
    }

    const myNewBalanceAfterDonate = myAccountBalanceNum - donateInputNumber;
    
    // set value current donation
    document.getElementById("current-donation").innerText = newBalanceAfterDonate;
    document.getElementById("my-account-balance").innerText = myNewBalanceAfterDonate;
    document.getElementById("input-donate-number").value = '';
    

})