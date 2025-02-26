document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const amountNum = getInputValueById("amount");
    const pinNum = getInputValueById("pin");

    const accountNum = document.getElementById("account-number").value;

    const totalBalance = getInnerTextById("main-balance");

    if (accountNum.length === 11) {
      if (pinNum === 1234) {
        const sum = totalBalance + amountNum;
        // document.getElementById("main-balance").innerText = sum;
        setInnerTextByIdAndValue("main-balance", sum);
      } else {
        console.log("incorrect pin");
      }
    } else {
      console.log("incorrect account number");
    }
  });
