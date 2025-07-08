const inputNumberBox = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputText = document.getElementById("output");

function intToRoman(num) {
    const M = ["", "M", "MM", "MMM"];
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    const thousands = M[Math.floor(num / 1000)];
    const hundreds = C[Math.floor((num % 1000) / 100)];
    const tens = X[Math.floor((num % 100) / 10)];
    const ones = I[num % 10];

    return thousands + hundreds + tens + ones;
}
  
convertBtn.addEventListener("click", () => {
    let inputValue = inputNumberBox.value.trim();
    if (!inputValue) {
        outputText.textContent = "Please enter a valid number";
    } else if (Number(inputValue) < 1) {
        outputText.textContent = "Please enter a number greater than or equal to 1";
    } else if (Number(inputValue) >= 4000) {
        outputText.textContent = "Please enter a number less than or equal to 3999";
    } else {
        const romanNum = intToRoman(Number(inputValue));
        outputText.textContent = `${romanNum}`;
    }
});


