# Write a function to return the square of a number.
# def sqaureNum(n):
#     return n*n
# n=int(input("Enter the number:"))
# print("The Square of Number:",sqaureNum(n))

# Write a function to check if a number is even or odd.
# n = int(input("Enter the Number:"))
# def checkEvenOdd(n):
#     if n < 1:
#         print("Please Enter the valid Number:")
#         return
#     elif n % 2 == 0 :
#         print("The number is Even:",n)
#     else:
#         print("The number is Odd:",n)
# checkEvenOdd(n)

# Create a function to find the maximum of two numbers.
# a = int(input("Enter the First Number:"))
# b = int(input("Enter the Second the Number:"))

# def findMax(a,b):
#     if a > b:
#         print("A is the Max:",a)
#     else:
#         print("B is the Maximum:",b)
# findMax(a,b)

# Create a function to find the maximum of three numbers.
# a = int(input("Enter the First Number:"))
# b = int(input("Enter the Second the Number:"))
# c = int(input("Enter the third Num:"))

# def findMax(a,b ,c):
#     if a > b and a > c:
#         print("A is the Max:",a)
#     elif b > a and b > c:
#         print("B is the Maximum:",b)
#     else:
#         print("C is the Maximum:",c)
# findMax(a,b,c)


# Write a function that returns the factorial of a number.
# num = int(input("Enter the Number:"))
# fact = 1
# def factorial(num):
#     for i in range(1,num+1):
#         fact = fact * i
#     return fact
# print("The Factorial of Number:",factorial(num))

# Write a function to check if a number is prime.
# num = int(input("Enter the number:"))
# def isPrime(num):
#     if num < 2:
#         return False

#     for i in range(2, int(num**0.5) + 1):
#         if num % i == 0:
#             return False
#     return True


# if isPrime(num):
#     print("The number is Prime")
# else:
#     print("The Number is Not Prime")


# Create a function to reverse a string.
# s = input("Enter the String")
# def reverseString(s):
#     rev = ""
#     for i in range(len(s)- 1, -1, -1):
#         rev += s[i]
#     return rev

# print("The Reverse String:", reverseString(s))

# Write a function to count vowels in a string.
# def countVowels(s):
#     vowels ="aioueAIOUE"
#     count = 0
#     for ch in s :
#         if ch in vowels:
#             count +=1
#     return count
# s = input("Enter the Name:")
# print("Count Vowles:",countVowels(s))


# Create a function to calculate the sum of elements in a list.
# li = list(map(int, input("Enter numbers separated by space: ").split()))
# def sumElement(li):
#     sum = 0
#     for l in li :
#         sum += l
#     return sum
# print("The Sum of Element:",sumElement(li))

# Write a function to return the Fibonacci number at position n.
# def fibonacci(n):
#     if n == 0:
#         return 0
#     if n == 1:
#         return 1

#     a = 0
#     b = 1

#     for _ in range(2, n + 1):
#         c = a + b
#         a = b
#         b = c

#     return b


# n = int(input("Enter position: "))
# print("Fibonacci number is:", fibonacci(n))

# Write a function to check if a string is palindrome.
# def isPalindrome(s):
#     for i in range(len(s)//2):
#         if s[i] != s[len(s) - i - 1]:
#             return False
    
#     return True


# s = input("Enter the String:")
# print("The String is Plaindrome or not:", isPalindrome(s))

# Create a function to convert Celsius to Fahrenheit.
# def celsiusToFahrenheit(c):
#     return (c * 9/5) + 32


# c = float(input("Enter temperature in Celsius: "))
# print("Temperature in Fahrenheit:", celsiusToFahrenheit(c))

# Write a function to count words in a sentence.
def countWords(sentence):
    words = sentence.split()
    return len(words)


s = input("Enter a sentence: ")
print("Number of words:", countWords(s))

# Create a function that returns the largest element in a list.

# Write a function to remove duplicates from a list.

# Create a function that returns the length of a list without using len().

# Write a function to find the GCD of two numbers.

# Write a function to find the LCM of two numbers.

# Create a function to flatten a nested list (1 level).

# Write a function that takes a list and returns a list of squares.
