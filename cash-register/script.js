// Global price and cash in drawer (CID) variables
let price = 19.5;
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];

// Currency unit values in dollars
const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
};

document.getElementById("price-display").textContent = `Total Price: $${price.toFixed(2)}`;

// Purchase button
document.getElementById("purchase-btn").addEventListener("click", () => {
    const cashInput = document.getElementById("cash");
    const changeDueDiv = document.getElementById("change-due");

    const cash = parseFloat(cashInput.value);

    // Check for invalid or empty input
    if (!cash) {
        alert("Please enter a valid amount of cash.");
        return;
    }

    // Calculate change due
    let changeDue = parseFloat((cash - price).toFixed(2));

    // Not enough money provided
    if (cash < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    // No change needed
    if (cash === price) {
        changeDueDiv.textContent = "No change due - customer paid with exact cash";
        return;
    }

    // Calculate total cash in drawer
    let totalCid = parseFloat(cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2));

    // If not enough money in drawer
    if (totalCid < changeDue) {
        changeDueDiv.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    let changeArr = [];
    let remainingChange = changeDue;

    // Largest bills dispensed first
    const reversedCid = [...cid].reverse();

    for (let [unit, amount] of reversedCid) {
        let unitValue = currencyUnit[unit];
        let unitAmount = 0;

        while (remainingChange >= unitValue && amount >= unitValue) {
            remainingChange = parseFloat((remainingChange - unitValue).toFixed(2));
            amount -= unitValue;
            unitAmount += unitValue;
        }

        if (unitAmount > 0) {
            changeArr.push([unit, parseFloat(unitAmount.toFixed(2))]);
        }
    }

    // If exact change cannot be made
    if (remainingChange > 0) {
        changeDueDiv.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    // Calculate total change dispensed
    let changeTotal = parseFloat(changeArr.reduce((acc, curr) => acc + curr[1], 0).toFixed(2));

    // If all the cash in the drawer is used up to give change 
    if (changeTotal === totalCid) {
        let changeString = changeArr.map(item => `${item[0]}: $${item[1]}`).join(" ");
        changeDueDiv.textContent = `Status: CLOSED ${changeString}`;
    } else {
        let changeString = changeArr.map(item => `${item[0]}: $${item[1]}`).join(" ");
        changeDueDiv.textContent = `Status: OPEN ${changeString}`;
    }
});

