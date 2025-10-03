function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;

  interestrateValue = document.getElementById("interest-rate").value;

  MonthsToPayValue = document.getElementById("months-to-pay").value;


  interest = (loanAmountValue * (interestrateValue * 0.01)) / MonthsToPayValue;

  monthlyPayment = (loanAmountValue / MonthsToPayValue + interest);

  document.getElementById('payment').innerHTML = 
  `Monthly Payment: ${monthlyPayment}`;

}
