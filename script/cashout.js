getElementByID("btn-withdraw-money")
    .addEventListener("click", function () {
        // Get and validate agent number
        const agentNumberInput = getValueByID("input-agent-number");
        if (agentNumberInput.length !== 11) {
            return alert("Invalid agent number");
        }

        //  Get and check cashout amout is valid or not
        const cashoutAmountInput = getValueByID("input-cashout-amount");
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

        // Finally get and validate 4 digit pin
        const pinInput = getValueByID("input-cashout-pin");
        if (pinInput.length !== 4 || pinInput !== "1234") {
            return alert("Invalid PIN");
        } else {
            alert("Cashout successful");
        }

        // Set new balance
        balanceElement.innerText = newBalance;
        alert("Successfully cashout");
    })