# Factorial using recursion.
# num = int(input("Enter the number:"))
# def factorial(num):
#     # base case
#     if num == 0 or num == 1:
#         return 1
#     # recursive call
#     return num * factorial(num - 1)
# print("The Factorial of Number:",factorial(num))

# Fibonacci using recursion.
# num = int(input("Enter the number:"))
# def fiboonacci(num):
#     # base case
#     if num == 0 or num == 1 :
#         return num
#     # recursive call
#     return fiboonacci(num - 1) + fiboonacci(num - 2)
# print("The Fiboonacci Number:",fiboonacci(num))
    

# Reverse a string using recursion.
# s = (input("Enter the number:"))
# def reverse(s):
#     # base case
#     if len(s) == 0:
#         return
#     # recursive call
#     return s[::-1]
# print("The Revserse the String:",reverse(s))

# Sum of digits using recursion.
# num = int(input("Enter the number:"))
# def sumDigit(num):
#     # base case:
#     if num < 10 :
#         return num
#     # recursive call
#     return num % 10 + sumDigit(num // 10)
# print("The Sum of the Digit:",sumDigit(num))

# Check palindrome using recursion.
# s = input("Enter the name:")
# def isPlaindrome(s):
#     # base case
#     if len(s) <=1:
#         return True
#     # check if the first character and last character is same or not:
#     if s[0] != s[-1]:
#         return False
#     # recursive call
#     return isPlaindrome(s[1:-1])
# print("The String is Plainddrome or not:",isPlaindrome(s))
    
# Solve Tower of Hanoi.
# def towerOfHanoi(n, source, helper, destination):
#     # Base case
#     if n == 1:
#         print(f"Move disk 1 from {source} to {destination}")
#         return
    
#     # Step 1: Move n-1 disks from source to helper
#     towerOfHanoi(n-1, source, destination, helper)
    
#     # Step 2: Move largest disk to destination
#     print(f"Move disk {n} from {source} to {destination}")
    
#     # Step 3: Move n-1 disks from helper to destination
#     towerOfHanoi(n-1, helper, source, destination)


# # Input
# n = int(input("Enter number of disks: "))
# towerOfHanoi(n, 'A', 'B', 'C')
