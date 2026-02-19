getElementByID("btn-pay-bill")
    .addEventListener("click", function () {
        // Get and validate category name
        const inputCategoryName = getValueByID("input-category-name");
        if (inputCategoryName === "Select to Pay") {
            return alert("Please select a category")
        }

        const inputBillerAccountNumber = getValueByID("input-biller-account-number");
        if (inputBillerAccountNumber.length !== 11) {
            return alert("Invalid biller account number");
        }

        const inputPayAmount = getValueByID("input-pay-amount");

        const newBalance = getCurrentBalance() - Number(inputPayAmount);

        // Check user has sufficient balance or not
        if (newBalance < 0) {
            return alert("Insufficient balance");
        }

        // Get and validate pin
        const pinInput = getValueByID("input-pay-bill-pin");
        if (pinInput.length !== 4 || pinInput !== "1234") {
            return alert("Invalid PIN");
        }

        // Add in history
        addInHistory(inputCategoryName, inputPayAmount, "payBill");

        // If pass every test
        setBalance(newBalance);
        alert("Pay bill successfull");
    });