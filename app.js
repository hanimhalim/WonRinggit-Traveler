// 1. Declare these OUTSIDE the function so they don't reset to 0 every click
let totalWon = 0;
let totalRM = 0;

function calculateExpenses() {
    const wonInput = document.getElementById("won-input");
    const wonValue = Number(wonInput.value); // Convert the text to a real Number
    const rate = 0.0034;
    
    // 2. Add the NEW value to the OLD total (The += trick)
    totalWon += wonValue; 
    totalRM += (wonValue * rate);

    // 3. Update the UI with the Cumulative total
    document.getElementById("total-rm-display").textContent = "Total Spent: RM " + totalRM.toFixed(2);
    document.getElementById("total-won-display").textContent = "Total Spent: ₩ " + totalWon + " (RM " + totalRM.toFixed(2) + ")";

    // 4. Clear and refocus
    wonInput.value = "";
    wonInput.focus();
}

// This line tells the button to trigger the brain when clicked
document.querySelector(".add-btn").addEventListener("click", calculateExpenses);