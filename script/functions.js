// Get value by id
function getValueByID(_id) {
    return document.getElementById(_id).value;
}

function getElementByID(_id) {
    return document.getElementById(_id);
}

function getCurrentBalance() {
    return Number(getElementByID("balance-count").innerText);
}

function setBalance (_newBalance) {
    getElementByID("balance-count").innerText = _newBalance;
}