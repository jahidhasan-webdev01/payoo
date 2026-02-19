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

        // Add in history
        const historyEl = getElementByID("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = 
        ` <div class="history-card pl-8 pr-12 py-4 rounded-2xl bg-white flex justify-between border border-gray-200 hover:bg-primary hover:text-primary-content">
                <div class="flex items-center gap-4">
                    <div class="w-[60px] h-[60px] bg-gray-200 rounded-full overflow-hidden p-4">
                        <img src="./assets/opt-1.png" alt="opt-1" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <h2 class="font-bold">Bank Deposit</h2>
                        <p class="text-sm mt-1">${formatDateTime(new Date())}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis rotate-90"></i>
            </div>
        `

        historyEl.append(newHistory)
        // If pass every test
        setBalance(newBalance);
        alert(`Money add to your account from ${inputBankName} at ${new Date()}.
        Current balance is: $${newBalance}`);
    })