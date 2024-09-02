function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;

  interestRateValue = document.getElementById("interest-rate").value;

  MonthsToPayValue = document.getElementById("months-to-pay").value;

  // interest
  const monthlyInterestRate = interestRateValue / 12 / 100;

  // terms to pay
  const totalPayments = MonthsToPayValue * 12;

  // monthly payment
  const monthlyPayment = loanAmountValue * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1).toFixed(2);

  document.getElementById(
    "payment"
  ).innerHTML = `Monthly payment: ${monthlyPayment}`;
}

console.log("Monthly payment:", monthlyPayment);

function goTo(page) {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function () {
    window.location.href = page;
  }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector("body").style.opacity = 1;
  }, 50);
});
