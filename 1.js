class BankAccount{
    constructor(userName, initBalance) {
    let _balance = initBalance;

    let _isAmountValid = function (amount) {
        return typeof amount === "number" && amount > 0;
    };

    this.checkBalance = function () {
        console.log(`Account balance for ${userName}: Rs. ${_balance}`);
    };

    this.deposit = function (amount) {
        if (_isAmountValid(amount)) {
            _balance += amount;
            console.log(`Deposited Rs. ${amount}. New balance: Rs. ${_balance}`);
        } else {
            console.log(`Invalid deposit amount. Please enter a positive amount.`);
        }
    };

    this.withdraw = function (amount) {
        if (_isAmountValid(amount)) {
            if (amount <= _balance) {
                _balance -= amount;
                console.log(`Withdrawn Rs. ${amount}. New balance: Rs. ${_balance}`);
            } else {
                console.log('Insufficient funds for withdrawal.');
            }
        } else {
            console.log('Invalid withdrawal amount. Please enter a positive amount.');
        }
    };
}}

const myAccount = new BankAccount('Mithun S', 1000);

myAccount.checkBalance();
myAccount.deposit(500);
myAccount.deposit(-50); 
myAccount.withdraw(200);
myAccount.withdraw(1500); 
myAccount.withdraw(-500); 
myAccount.checkBalance();
