document.getElementById("btn-withdraw-money")
    .addEventListener("click", function () {
        // Get input values
        const agentNumberInput = getValueByID("input-agent-number");
        const cashoutAmountInput = getValueByID("input-cashout-amount");
        const pinInput = getValueByID("input-cashout-pin");

        //  Validate agent number
        if (agentNumberInput.length !== 11) {
            return alert("Invalid agent number");
        }

        //  Check cashout amout is valid or not
        if (cashoutAmountInput < 1) {
            return alert("Too less amount to cash out");
        }

        // Get the balance
        const balanceElement = getElementByID("balance-count");
        const balance = balanceElement.innerText;

        // Calculate new balance
        const newBalance = (Number(balance) - Number(cashoutAmountInput))

        // Check user has sufficient balance or not
        if (newBalance < 0) {
            return alert("Insufficient balance");
        }

        // Finally validate 4 pin
        if (pinInput.length !== 4 || pinInput !== "1234") {
            return alert("Invalid PIN");
        } else {
            alert("Cashout successful");
        }

        // Set new balance
        balanceElement.innerText = newBalance;
    })