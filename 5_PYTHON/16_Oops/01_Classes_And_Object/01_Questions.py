# Q1: Create a BankAccount class with deposit & withdraw
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return f"Deposited {amount}. Balance: {self.balance}"

    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient funds"
        self.balance -= amount
        return f"Withdrawn {amount}. Balance: {self.balance}"

acc = BankAccount("Sonu", 1000)
print(acc.deposit(500))
print(acc.withdraw(300))