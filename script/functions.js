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

function addInHistory(_type, _amount, _imgName) {
    const historyEl = getElementByID("history-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML =
        ` <div class="history-card pl-8 pr-12 py-4 rounded-2xl bg-white flex justify-between border border-gray-200 hover:bg-primary hover:text-primary-content">
                <div class="flex items-center gap-4">
                    <div class="w-[60px] h-[60px] bg-gray-200 rounded-full overflow-hidden p-4">
                        <img src="./assets/${_imgName}.png" alt="${_imgName}" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <h2 class="font-bold">${_type}</h2>
                        <p class="text-sm mt-1">Amount: $ ${_amount}</p>
                        <p class="text-sm mt-1 text-neutral/50">${formatDateTime(new Date())}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis rotate-90"></i>
            </div>
        `

    historyEl.append(newHistory)
}