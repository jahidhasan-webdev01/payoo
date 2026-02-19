getElementByID("btn-send-money")
    .addEventListener("click", function () {
        // Get and validate agent number
        const agentNumberInput = getValueByID("input-user-account-number");
        if (agentNumberInput.length !== 11) {
            return alert("Invalid user account number");
        }

        //  Get and check cashout amout is valid or not
        const sendAmountInput = getValueByID("input-send-money-amount");
        if (sendAmountInput < 1) {
            return alert("Too less amount to send");
        }

        // Get the balance
        const balanceElement = getElementByID("balance-count");
        const balance = balanceElement.innerText;

        // Calculate new balance
        const newBalance = (Number(balance) - Number(sendAmountInput))

        // Check user has sufficient balance or not
        if (newBalance < 0) {
            return alert("Insufficient balance");
        }

        // Finally get and validate 4 digit pin
        const pinInput = getValueByID("input-send-money-pin");
        if (pinInput.length !== 4 || pinInput !== "1234") {
            return alert("Invalid PIN");
        }

        // Add in history
        addInHistory("Cashout", sendAmountInput, "sendMoney");

        // Set new balance
        balanceElement.innerText = newBalance;
        alert("Successfully send money");
    })