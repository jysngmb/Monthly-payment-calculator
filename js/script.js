function goTo (page){
  document.querySelector("body").style.opacity = 0;
  setTimeout(function (){
    document.location.href = page;
  }, 500);
};


document.addEventListener("DOMCONTENTLoaded", function(){
  setTimeout(function (){
    document.querySelector("body").style.opacity = 1;
  }, 50);
});

function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;

  interestRateValue = document.getElementById("interest-rate").value;

  MonthsToPayValue = document.getElementById("months-to-pay").value;

  // interest
  const monthlyInterestRate = interestRateValue / 12 / 100;

  // terms to pay
  const totalPayments = MonthsToPayValue * 12;

  // monthly payment
  const monthlyPayment = loanAmountValue * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

  document.getElementById("payment").innerHTML = `Monthly payment: ${monthlyPayment.toFixed(2)}`;

  termspayment = monthlyPayment * totalPayments;

  document.getElementById("totalpayment").innerHTML = `Total paymen: ${termspayment.toFixed(2)}`;

  console.log("Monthly Payment: ", monthlyPayment);
}



// function calculateLoan(){
//   loanAmountValue = document.getElementById("loan-amount").value;
//   interestRateValue = document.getElementById("interest-rate").value;
//   MonthsToPayValue = document.getElementById("months-pay").value;

//   const monthlyInterestRate = interestRateValue / 12 / 100;
//   const totalPayments = MonthsToPayValue * 12;
//   const monthlyPayment = loanAmountValue * monthlyInterestRate * (1 + monthlyInterestRate, totalPayments)^60 / (1 + monthlyInterestRate, totalPayments - 1)^60.toFixed(2));

//   document.getElementById("payment").innerHTML = `Monthly payment: ${monthlyPayment}`;
// }




