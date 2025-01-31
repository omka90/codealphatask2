let totalExpense = 0;

function addExpense() {
  const expenseName = document.getElementById("expense-name").value;
  const expenseAmount = parseFloat(
    document.getElementById("expense-amount").value
  );

  if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
    alert("Please enter a valid expense name and amount.");
    return;
  }

  // Add the expense to the list
  const expenseList = document.getElementById("expense-list");
  const li = document.createElement("li");
  li.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
  expenseList.appendChild(li);

  // Update the total expense
  totalExpense += expenseAmount;
  document.getElementById(
    "total-expense"
  ).textContent = `$${totalExpense.toFixed(2)}`;

  // Clear the input fields
  document.getElementById("expense-name").value = "";
  document.getElementById("expense-amount").value = "";
}
