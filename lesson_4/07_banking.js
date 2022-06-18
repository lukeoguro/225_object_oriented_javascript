function makeBank() {
  let accounts = [];
  return {
    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number);
      accounts.push(account);
      return account;
    },
    transfer(account1, account2, amount) {
      amount = account1.withdraw(amount);
      account2.deposit(amount);
      return amount;
    }
  }
}

function makeAccount(number) {
  let balance = 0;
  let transactions = [];
  return {
    balance() {
      return balance;
    },
    transactions() {
      return transactions;
    },
    number() {
      return number;
    },
    deposit(amount) {
      balance += amount;
      transactions.push({ type: "deposit", amount });
      return amount;
    },
    withdraw(amount) {
      if (amount > balance) amount = balance;
      balance -= amount;
      transactions.push({ type: "withdraw", amount });
      return amount;
    }
  }
}

// Deposit method
let account = makeAccount();
console.log(account.balance());
// 0
console.log(account.deposit(12));
// 12
console.log(account.balance());
// 12
console.log(account.deposit(10));
// 10
console.log(account.balance());
// 22

// Withdraw method
account.deposit(78);
console.log(account.balance());
// 100
console.log(account.withdraw(19));
// 19
console.log(account.balance());
// 81
console.log(account.withdraw(91));
// 81
console.log(account.balance());
// 0

// Transactions property
console.log(account.transactions());

// Multiple accounts
let otherAccount = makeAccount();
console.log(otherAccount.transactions());

// Bank object
let bank = makeBank();
console.log(bank.accounts);
// []

// Bank numbers
account = bank.openAccount();
console.log(account.number());
// 101
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102

// Transfer method
bank = makeBank();
let source = bank.openAccount();
console.log(source.deposit(5));
// 5
let destination = bank.openAccount();
console.log(bank.transfer(source, destination, 7));
// 5
console.log(source.balance());
// 0
console.log(destination.balance());
// 5