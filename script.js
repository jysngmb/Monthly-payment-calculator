function goTo (page) {
  document.querySelector("body").style.opacity = 0;

  setTimeout(function(){
    window.location.href = page;
  }, 500);
};

document.addEventListener("DOMContentLoaded", function(){
  setTimeout(function(){
    document.querySelector("body").style.opacity = 1;
  }, 50);
});

function calculateLoan(){

  // get the value
  loanAmountValue = document.getElementById("loan-amount").value;
  interestRateValue = document.getElementById("interest-rate").value;
  MonthsToPayValue = document.getElementById("months-to-pay").value;

  // interest
  const monthlyInterestRate = interestRateValue / 12 / 100;

  // terms to pay
  const totalPayments = MonthsToPayValue * 12;
  
  // monthly payment
  const monthlyPayment = loanAmountValue * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

  // display monthly payment
  
  document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(2)}`;


  const termspayment = monthlyPayment * totalPayments;
  // display total payment
  document.getElementById("totalpayment").innerHTML = `Total payment: ${termspayment.toFixed(2)}`;
  
  
  // Check for NaN or Infinity and log accordingly
    if (isNaN(monthlyPayment) && isNaN(termspayment)) {
        console.log("Monthly payment and total payment are both NaN.");
    } else if (isNaN(monthlyPayment) && !isFinite(termspayment)) {
        console.log("Monthly payment is NaN and total payment is Infinity.");
    } else if (!isFinite(monthlyPayment) && isNaN(termspayment)) {
        console.log("Monthly payment is Infinity and total payment is NaN.");
    } else if (!isFinite(monthlyPayment) && !isFinite(termspayment)) {
        console.log("Monthly payment and total payment are both Infinity.");
    } else {
        console.log("Monthly Payment: ", monthlyPayment.toFixed(2));
        console.log("Total payment: ", termspayment.toFixed(2));
    }
}

  