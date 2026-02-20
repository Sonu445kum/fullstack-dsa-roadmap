# Print numbers from 1 to 10.
# for i in range(1, 11):
#     print(i, end=" ")

# Print numbers from 10 to 1.
# for i in range(10, 0,-1):
#     print(i, end=" ")

# Print even numbers from 1 to 50.
# for i in range(1,50,1):
#     if i % 2 == 0 :
#         print(i ,end = " ")

# Print odd numbers from 1 to 50.
# for i in range(1,50,1):
#     if i % 2 != 0 :
#         print(i ,end = " ")


# Print multiplication table of a given number.
# num = int(input("Enter the Num:"))
# for i in range( 1,11,1):
#     print(num * i)


# Find sum of first N natural numbers.
# num = int(input("Enter the Num:"))
# sum = 0
# for i in range(1,num+1):
#     sum+=i
# print("The Sum of first N natural numbers: ",sum)

# Find factorial of a number.
# num = int(input("Enter the Num:"))
# fact = 1
# for i in range(1,num+1):
#     fact *= i
# print("The Factorial of given Num:",fact)

# Count number of digits in a number.
# num = int(input("Enter the num:"))
# count = 0
# while (num >=1):
#     num = num/10
#     count = count + 1

# print("The Count Number of Digit:", count)


# Reverse a number.
# num = int(input("Enter the num:"))
# rev = 0
# while(num >=1):
#     lastDigit = num % 10
#     rev = (rev * 10) + lastDigit
#     num = num //10
# print("The Reverse of the Given Num:",rev)

# Check if a number is palindrome.
# num = int(input("Enter the num:"))
# temp = num
# rev = 0
# while(temp >=1):
#     lastDigit = temp % 10
#     rev = (rev * 10) + lastDigit
#     temp = temp //10
# if rev == num:
#     print("The number is Palindrome:",num)
# else:
#     print("The nummber is Not Palindrome:",num)


# Loops – Intermediate Logic

# Check if a number is prime.
# num = int(input("Enter the Number:"))
# flag = False
# for i in range(2, num):
#     if num % i == 0:
#         flag = True
#         break

# if flag == True:
#     print("The number is Not Prime", num)
# else:
#     print("The Number is  Prime:", num)


# Print all prime numbers between 1 to N.
# num = int(input("Enter the Number:"))
# for num in range(2, num + 1):   # Start from 2 (1 is not prime)
#     is_prime = True

#     for i in range(2, num):
#         if num % i == 0:
#             is_prime = False
#             break

#     if is_prime:
#         print(num, end=" ")

# Find GCD of two numbers.
# a = int(input("Enter first number: "))
# b = int(input("Enter second number: "))

# gcd = 1

# for i in range(1, min(a, b) + 1):
#     if a % i == 0 and b % i == 0:
#         gcd = i

# print("GCD is:", gcd)

# # Find GCD using Euclidean Algorithm

# a = int(input("Enter first number: "))
# b = int(input("Enter second number: "))

# while b != 0:
#     a, b = b, a % b

# print("GCD is:", a)

# Find LCM of two numbers.
# Find LCM of two numbers

# a = int(input("Enter first number: "))
# b = int(input("Enter second number: "))

# # Step 1: Find GCD using Euclidean Algorithm
# x, y = a, b
# while y != 0:
#     x, y = y, x % y

# gcd = x

# # Step 2: Find LCM
# lcm = (a * b) // gcd

# print("LCM is:", lcm)

# Print Fibonacci series up to N terms.
# N = int(input("Enter number of terms: "))

# a = 0
# b = 1

# print("Fibonacci Series:")

# for i in range(N):
#     print(a, end=" ")
#     a, b = b, a + b

# Find sum of digits of a number.
# num = int(input("Enter a number: "))
# sum_digits = 0

# while num > 0:
#     digit = num % 10
#     sum_digits += digit
#     num = num // 10

# print("Sum of digits:", sum_digits)

# Find product of digits of a number.
# num = int(input("Enter a number: "))
# product = 1

# while num > 0:
#     digit = num % 10
#     product *= digit
#     num = num // 10

# print("Product of digits:", product)

# Print all factors of a number.
# num = int(input("Enter a number: "))

# print("Factors of", num, "are:")

# for i in range(1, num + 1):
#     if num % i == 0:
#         print(i, end=" ")

# Check if a number is Armstrong.
# num = int(input("Enter a number: "))
# temp = num
# digits = len(str(num))   # count digits
# sum_of_powers = 0

# while temp > 0:
#     digit = temp % 10
#     sum_of_powers += digit ** digits
#     temp = temp // 10

# if sum_of_powers == num:
#     print("The number is Armstrong:", num)
# else:
#     print("The number is not Armstrong:", num)

# Print pattern:

# *
# **
# ***
# ****
# *****

# for i in range(1, 6):   # rows
#     for j in range(i):  # columns
#         print("*", end="")
#     print()   # move to next line
