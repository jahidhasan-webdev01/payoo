document.getElementById("btn-login")
    .addEventListener("click", function () {
        const numberInput = document.getElementById("input-number").value;
        const pinInput = document.getElementById("input-pin").value;

        if (numberInput.length < 11) {
            return alert("Invalid number")
        }

        if (pinInput.length < 4) {
            return alert("Invalid PIN")
        }

        if (numberInput === "01774266484" && pinInput === "1234") {
            alert("Login success");
            window.location.assign("/home.html");
        } else {
            return alert("Login failed!");
        }
    }) 