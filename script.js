function isPalindrome(text) {
    
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    return cleanedText === cleanedText.split("").reverse().join("");
  }

  document.getElementById("check-btn").addEventListener("click", function() {
    const inputText = document.getElementById("text-input").value.trim();
    const resultElement = document.getElementById("result");

   
    if (inputText === "") {
      alert("Please input a value");
      return;
    }

   
    const isPalindromeResult = isPalindrome(inputText);
    if (isPalindromeResult) {
      resultElement.textContent = `${inputText} is a palindrome`;
    } else {
      resultElement.textContent = `${inputText} is not a palindrome`;
    }
  });