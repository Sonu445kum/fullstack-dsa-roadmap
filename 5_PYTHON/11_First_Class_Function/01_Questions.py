# Assign function to variable.
# def greet():
#     return "Hello Sonu"

# say_hello = greet   # Assign function to variable

# print(say_hello())  # Hello Sonu

# Pass function as argument.
# def greet(name):
#     return f"Hello :{name}"

# def process_user(callback):
#     print(callback("Sonu"))

# process_user(greet)

# Return function from another function.
# def outer():
#     def inner():
#         return "Hello Sonu"
#     return inner
# ans =outer()
# print(ans())

# Store functions inside list.
# def add(a,b):
#     return a + b
# def sub(a , b):
#     return a - b
# def mul(a , b):
#     return a * b
# operations = [add , sub ,mul]
# print(operations[0](2 ,3))
# print(operations[1](5 , 1))
# print(operations[2](2 , 4))

# Create calculator using first class functions.
# def add(a, b):
#     return a + b

# def subtract(a, b):
#     return a - b

# def multiply(a, b):
#     return a * b

# def divide(a, b):
#     if b == 0:
#         return "Cannot divide by zero"
#     return a / b

# # Store functions in dictionary
# operations = {
#     "+": add,
#     "-": subtract,
#     "*": multiply,
#     "/": divide
# }

# # User input
# num1 = float(input("Enter first number: "))
# operator = input("Enter operator (+, -, *, /): ")
# num2 = float(input("Enter second number: "))

# # Call function dynamically
# if operator in operations:
#     result = operations[operator](num1, num2)
#     print("Result:", result)
# else:
#     print("Invalid operator")

# Create strategy pattern using functions.
# def credit_card_payment(amount):
#     return f"Paid ₹{amount} using Credit Card"

# def upi_payment(amount):
#     return f"Paid ₹{amount} using UPI"

# def paypal_payment(amount):
#     return f"Paid ₹{amount} using PayPal"

# def process_payment(amount, payment_strategy):
#     return payment_strategy(amount)

# print(process_payment(1000, credit_card_payment))
# print(process_payment(500, upi_payment))
# print(process_payment(2000, paypal_payment))