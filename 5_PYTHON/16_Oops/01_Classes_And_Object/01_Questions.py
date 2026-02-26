# Q1: Create a BankAccount class with deposit & withdraw
# class BankAccount:
#     def __init__(self, owner, balance=0):
#         self.owner = owner
#         self.balance = balance

#     def deposit(self, amount):
#         self.balance += amount
#         return f"Deposited {amount}. Balance: {self.balance}"

#     def withdraw(self, amount):
#         if amount > self.balance:
#             return "Insufficient funds"
#         self.balance -= amount
#         return f"Withdrawn {amount}. Balance: {self.balance}"

# acc = BankAccount("Sonu", 1000)
# print(acc.deposit(500))
# print(acc.withdraw(300))

# Q2: Implement __str__() method
# class Person:
#     def __init__(self, name):
#         self.name = name

#     def __str__(self):
#         return f"Person Name: {self.name}"

# p = Person("Sonu")
# print(p)

# Student class with grade calculation
# class Student:
#     def __init__(self, name, marks):
#         self.name = name
#         self.marks = marks

#     def calculate_grade(self):
#         if self.marks >= 90:
#             return "A"
#         elif self.marks >= 75:
#             return "B"
#         else:
#             return "C"

# s1 = Student("Rahul", 88)
# print(s1.calculate_grade())