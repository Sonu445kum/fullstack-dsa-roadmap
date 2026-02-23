# Square list using map.
# li = [2,3,4,5,6]
# square_list = list(map(lambda x : x ** 2 ,li))
# print("The Square List of Number:",square_list)

# Filter prime numbers.
# li = [2,3,4,5,6,7,8,9]
# def isPrime(num):
#     if num <=1:
#         return False
#     for i in range(2, int(num ** 0.5) + 1):
#         if num % i == 0 :
#             return False
#     return True
# filterPrime = list(filter(isPrime,li))
# print("The Prime Number:",filterPrime)

# Find sum using reduce.
# from functools import reduce
# li = [1,2,3,4,5]
# sumNumber = reduce(lambda x , y : x + y,li)
# print("The Sum of All Num in the List:",sumNumber)

# Multiply all numbers using reduce.
# from functools import reduce
# li = [1,2,3,4,5,6]
# multiplyllNum = reduce(lambda x , y : x * y , li)
# print("The Product of All Num:",multiplyllNum)

# Convert strings to uppercase using map.
# s = ["sonu","monu","gonu"]
# uppercaseString = list(map(str.upper ,s))
# print("The UpperCase of the string:",uppercaseString)

# Chain map + filter together.
# numbers = [1, 2, 3, 4, 5, 6, 7, 8]

# result = list(
#     map(lambda x: x * x,
#         filter(lambda x: x % 2 == 0, numbers))
# )

# print(result)