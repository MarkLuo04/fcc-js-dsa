const number = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div")

checkBtn.addEventListener("click", ()=> {
    const userInput = number.value.trim();
    if (!userInput) {
        alert("Please provide a phone number");
    }

    const validNumber = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

    if (validNumber.test(userInput)) {
        resultsDiv.textContent = `Valid phone number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid phone number: ${userInput}`;
    }

});

clearBtn.addEventListener("click", ()=> {
    resultsDiv.textContent = "";
});

