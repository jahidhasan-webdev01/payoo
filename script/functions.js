// Get value by id
function getValueByID(_id) {
    return document.getElementById(_id).value;
}

function getElementByID(_id) {
    return document.getElementById(_id);
}

function getElementByClassName(_className) {
    return document.getElementsByClassName(_className);
}

function getCurrentBalance() {
    return Number(getElementByID("balance-count").innerText);
}

function setBalance(_newBalance) {
    getElementByID("balance-count").innerText = _newBalance;
}

function showOnly(_id) {
    // Hide all tags
    const allTags = document.querySelectorAll(".tag");
    allTags.forEach(tag => {
        tag.classList.add("hidden");
    })

    // Remove hidden from selected element
    getElementByID(_id).classList.remove("hidden");

    // For showing active
    const buttons = document.querySelectorAll(".tag-menu");
    buttons.forEach(btn => {
        btn.classList.remove("bg-primary", "text-primary-content");
    })

    // Get selected button
    const selectedButton = getElementByClassName(`tag-${_id}`)[0];

    selectedButton.classList.add("bg-primary", "text-primary-content");
}

function formatDateTime(date) {
    const now = new Date();

    const isToday =
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear();

    // Format time
    const time = date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    if (isToday) {
        return `Today ${time}`;
    } else {
        return date.toLocaleDateString() + " " + time;
    }
}
