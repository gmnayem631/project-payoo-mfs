document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashoutPin = getInputValueById("pin");
    const cashoutAmount = getInputValueById("cash-out-amount");
    const accountCashOut = document.getElementById("account-number").value;

    // accessing main balance
    const mainBalance = getInnerTextById("main-balance");

    // pin checking
    if (accountCashOut.length === 11 && cashoutPin === 1234) {
      const sum = mainBalance - cashoutAmount;
      document.getElementById("main-balance").innerText = sum;
    } else {
      alert("incorrect pin or account number");
    }
  });
