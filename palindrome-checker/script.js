document.addEventListener('DOMContentLoaded', function() {
    const checkBtn = document.getElementById('check-btn');
    const textInput = document.getElementById('text-input');
    const resultDiv = document.getElementById('result');

    checkBtn.addEventListener('click', function() {
        const inputValue = textInput.value.trim();

        // Check if input is empty
        if (!inputValue) {
            alert('Please input a value');
            return; 
        }

        const isPalindrome = checkPalindrome(inputValue);

        // Update result text
        if (isPalindrome) {
            resultDiv.textContent = `${inputValue} is a palindrome`;
        } else {
            resultDiv.textContent = `${inputValue} is not a palindrome`;
        }
    });

    // Checks if string is palindrome
    function checkPalindrome(str) {
        // Remove non-alphanumeric chars and convert to lowercase
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        // Compare original string with reversed string
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }
});