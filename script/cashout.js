document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashoutPin = document.getElementById("cash-out-pin").value;
    const convertedCashoutPin = parseInt(cashoutPin);
    const cashoutAmount = document.getElementById("cash-out-amount").value;
    const convertedCashoutAmount = parseInt(cashoutAmount);

    // accessing main balance
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    // pin checking
    if (convertedCashoutPin === 1234) {
      const newBalance = convertedMainBalance - convertedCashoutAmount;
      document.getElementById("main-balance").innerText = newBalance;
    } else {
      alert("invalid pin");
    }
  });
