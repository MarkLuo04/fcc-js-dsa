const inputNumberBox = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputText = document.getElementById("output");

convertBtn.addEventListener("click", ()=> {
    if(!inputNumberBox) {
        outputText.textContent = "Please enter a valid number";
    }
});