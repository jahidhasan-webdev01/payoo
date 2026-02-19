document.getElementById("btn-login")
    .addEventListener("click", function () {
        // Get input values
        const numberInput = getValueByID("input-number");
        const pinInput = getValueByID("input-pin");

        // validate number
        if (numberInput.length !== 11 || numberInput !== "01774266484") {
            return alert("Invalid number");
        }

        // Validate pin
        if (pinInput.length !== 4 || pinInput !== "1234") {
            return alert("Invalid PIN");
        }

        // If pass every test
        alert("Login successfully");
        window.location.assign("./home.html");
    }) 