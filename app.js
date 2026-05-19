//Declare these OUTSIDE the function so they don't reset to 0 every click
let totalWon = 0;
let totalRM = 0;
let expenseHistory = []; // Global state to keep track of all spending

function calculateExpenses() {
    const wonInput = document.getElementById("won-input");
    const wonValue = Number(wonInput.value); // Convert the text to a real Number
    const rate = 0.0034;
    
    // The Gatekeeper: prevents empty or negative numbers
    if (wonValue <= 0 || isNaN(wonValue)) {
        alert("Please enter a valid amount!");
        return; // This "kills" the function here so no math happens
    }
    // -----------------------

    //Logic-Add the NEW value to the OLD total (The += trick)
    totalWon += wonValue; 
    totalRM += (wonValue * rate);

    //NEW: Save this specific expense into our history list
    expenseHistory.push(wonValue);

    // 1. Grab the empty list from HTML
    const listDisplay = document.getElementById("expense-list");

    // 2. Create a new "li" element in memory
    const newEntry = document.createElement("li");

    // 3. Put text inside that new element
    newEntry.textContent = "₩ " + wonValue + " (RM " + (wonValue * 0.0034).toFixed(2) + ")";

    // 4. "Attach" it to our list on the screen
    listDisplay.appendChild(newEntry);

    //Update the UI with the Cumulative total
    document.getElementById("total-rm-display").textContent = "Total Spent: RM " + totalRM.toFixed(2);
    document.getElementById("total-won-display").textContent = "Total Spent: ₩ " + totalWon + " (RM " + totalRM.toFixed(2) + ")";

    //Technical Check: Look at your "History" in the developer console
    console.log("Updated History List:", expenseHistory);

     //Clear and refocus
    wonInput.value = "";
    wonInput.focus();

    // ================= NEW CODE STARTS HERE =================

    // 3. Create a Delete Button out of thin air
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn"); // Adding a class so we can style it later

    // 4. Put the button INSIDE the li item
    newEntry.appendChild(deleteBtn);

    // ================= NEW CODE ENDS HERE =================

    // 5. Attach the whole li (with the button inside it) to our UI list
    listDisplay.appendChild(newEntry);
}

// This line tells the button to trigger the brain when clicked
document.querySelector(".add-btn").addEventListener("click", calculateExpenses);

// Allow the user to press "Enter" instead of clicking the button
document.getElementById("won-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calculateExpenses();
    }
});