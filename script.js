//Starting values
let monthlyIncome = 0;
let expenses = []; //an array of objects
let expenseTotal = 0;
let  balance = 0;

//Create referenes to HTML elements
let monthlyBudget = document.getElementById("monthly_budget");
let incomeInput = document.getElementById("income_input");
let unpdateBudgetButton = document.getElementById("update_budget_button");

let nameInput = document.getElementById("name_input");
let amountInput = document.getElementById("amount_input");
let addExpenseButton = document.getElementById("add_expense_button");

let expenseList = document.getElementById("expense_list"); //This is a DIV
let totalExpenses = document.getElementById("total_expenses");
let remainingBalance = document.getElementById("remaining_balance");

//Build a function that stores & displays the entered budget value
function updateBudget(event){
    console.log("updateBudget fired.");
    event.preventDefault();
    monthlyIncome = parseInt(incomeInput.value); //Converts string to a numerical value
    monthlyBudget.innerText = "$" + monthlyIncome;
    //TODO: Recalculate remaining balance
    updateBalance();
}
//Add updateBudget to buttom
unpdateBudgetButton.onclick = updateBudget;

// Build a helper function to update the remaining balance
function updateBalance() {
    console.log("updateBalance fired.");
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;
    if (balance < 0) {
        remainingBalance.classList.add("red");
        remainingBalance.classList.remove("green");
    } else {
        remainingBalance.classList.remove("red");
        remainingBalance.classList.add("green");
    }
}

//Build a function that adds a new expense to the expense list
function addExpense(event){
    console.log("add expense fired.");
    event.preventDefault();
    //Create a new expense object
    let expense = {
        name: nameInput.value,
        amount: parseInt(amountInput.value) //Convert string to number
    };
    expenses.push(expense);
    console.log(expenses);
    //Display the expense
    let newExpense = document.createElement("p");
    newExpense.innerText = expense.name + " " + "$" + expense.amount;
    expenseList.appendChild(newExpense);
    //Total the expenses and display
    updateExpenseTotal();
}

//Add addExpense as an onclick handler to the addExpense button
addExpenseButton.onclick = addExpense;

//Build a helper function which totals the expenses and displays in the app
function updateExpenseTotal() {
    console.log("updateExpenseTotal fired.");
    //Reset the expense total
    expenseTotal = 0;
    //Recalculate using for loop
    for(let i = 0; i < expenses.length; i++) {
        let currentExpense = expenses[i];
        console.log(currentExpense);
        expenseTotal = expenseTotal + expenses[i].amount;
    }
    //Display the result
    totalExpenses.innerText = "$" + expenseTotal;
    //Re-calculate the remaining balance
    updateBalance();
}