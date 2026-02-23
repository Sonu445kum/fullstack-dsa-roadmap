# Add two numbers using lambda.
# add = lambda x ,y : x + y
# print(add(2,3))

# Sort list using lambda.
# li = [8,3,1,2,5,6]
# li.sort(key=lambda x : x% 10)
# print(li)


# Filter even numbers using lambda.
# number = [ 1,2,3,4,5,6]
# even_Number = list(filter(lambda x : x % 2 == 0,number))
# print(even_Number)

# Square numbers using lambda + map.
# number = [ 1,2,3,4,5,6]
# square_number = list(map(lambda  x : x**2,number))
# print("Sqaure of Number:",square_number)


# Convert recursive function to lambda (advanced).
# factorial = lambda n: 1 if n == 0 else n * factorial(n - 1)
# print(factorial(5))

# # Use lambda inside dictionary.
# operations = {
#     "add": lambda a, b: a + b,
#     "sub": lambda a, b: a - b,
#     "mul": lambda a, b: a * b,
#     "div": lambda a, b: a / b
# }

# print(operations["add"](5, 3))   # 8
# print(operations["mul"](5, 3))   # 15

