// This function is the "brain" that does the math
function calculateExpenses() {
    const wonValue = document.getElementById("won-input").value;
    const rate = 0.0034; // Today's exchange rate
    const result = wonValue * rate;

    alert("Converting... ₩" + wonValue + " is approximately RM " + result.toFixed(2));
}

// This line tells the button to trigger the brain when clicked
document.querySelector(".add-btn").addEventListener("click", calculateExpenses);