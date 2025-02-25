document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);

    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);

    // Selecting main balance
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertMainBalance = parseFloat(mainBalance);
    console.log(typeof convertMainBalance);

    if (convertedPin === 1234) {
      const newBalance = convertMainBalance + convertedAmount;
      document.getElementById("main-balance").innerText = newBalance;
    } else {
      alert("incorrect pin");
    }
  });
