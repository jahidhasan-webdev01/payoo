getElementByID("btn-add-money")
    .addEventListener("click", function () {
        // Get and validate bank name
        const inputBankName = getValueByID("input-bank-name");
        if (inputBankName === "Select a bank") {
            return alert("Please select a bank")
        }

        const inputBankAccountNumber = getValueByID("input-bank-account-number");
        if (inputBankAccountNumber.length !== 11) {
            return alert("Invalid bank account number");
        }

        const inputAddAmount = getValueByID("input-add-amount");

        const newBalance = getCurrentBalance() + Number(inputAddAmount);

        // Get and validate pin
        const pinInput = getValueByID("input-add-money-pin");
        if (pinInput.length !== 4 || pinInput !== "1234") {
            return alert("Invalid PIN");
        }

        // If pass every test
        setBalance(newBalance);
        alert(`Money add to your account from ${inputBankName} at ${new Date()}.
        Current balance is: $${newBalance}`);
    })