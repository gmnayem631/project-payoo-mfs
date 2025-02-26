document
  .getElementById("transaction-box")
  .addEventListener("click", function (event) {
    handleToggle("add-money", "none");
    handleToggle("cash-out", "none");
    handleToggle("transaction", "block");
  });
