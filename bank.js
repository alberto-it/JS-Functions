balance = 1000; //initial balance

function deposit(amount) {
  balance += amount;
  console.log("Deposited:", amount, " | New balance:", balance);
}

function withdraw(amount) {
  if (amount > balance) {
    console.log("Insufficient funds! Available balance:", balance);
  } else {
    balance -= amount;
    console.log("Withdrew: ", amount, " | New balance:", balance);
  }
}

function checkBalance() {
  console.log("Current balance:", balance);
}

checkBalance();
withdraw(75);
deposit(100);
