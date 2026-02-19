getElementByID("btn-get-bonus")
    .addEventListener("click", function () {
        // Get and validate coupon name
        const inputBonusName = getValueByID("input-bonus-coupon");
        if (inputBonusName !== "bonus10") {
            return alert("Invalid Bonus Coupon")
        }

        const bonusAmount = 10;
        const newBalance = getCurrentBalance() + bonusAmount;

        // Add in history
        addInHistory("Coupon Bonus", bonusAmount, "addMoney");

        // If pass every test
        setBalance(newBalance);

        alert(`Congratulations! You got a bonus of $${bonusAmount}.`)
    });