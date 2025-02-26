document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const amountNum = getInputValueById("amount");
    const pinNum = getInputValueById("pin");

    const accountNum = document.getElementById("account-number").value;

    const totalBalance = getInnerTextById("main-balance");

    if (amountNum < 0) {
      alert("invalid amount");
      return;
    }

    if (accountNum.length === 11) {
      if (pinNum === 1234) {
        const sum = totalBalance + amountNum;
        // document.getElementById("main-balance").innerText = sum;
        setInnerTextByIdAndValue("main-balance", sum);

        // Accessing the transaction container
        const transactionContainer = document.getElementById(
          "transaction-container"
        );

        // Adding information to the transaction history section
        const p = document.createElement("p");
        p.innerText = `
        added ${amountNum} from account number: ${accountNum}
        `;
        transactionContainer.appendChild(p);
      } else {
        console.log("incorrect pin");
      }
    } else {
      console.log("incorrect account number");
    }
  });
