# Create inner function and call it.
# def outer():
#     def inner():
#         return "Hello Sonu"
#     return inner()

# outerFunctions = outer()
# print(outerFunctions)

# Return inner function.
# def outer():
#     def inner():
#         return "Hello Sonu"
#     return inner()

# print(outer())


# Closure example.
# def outer():
#     count = 0
#     def inner():
#       nonlocal  count
#       count +=1
#       return count
#     return inner

# outerFunctions = outer()
# print(outerFunctions())
# print(outerFunctions())

# Modify outer variable using nonlocal.
# def outer():
#     count = 0   # outer variable

#     def inner():
#         nonlocal count   # refer to outer's count
#         count += 1
#         return count

#     return inner

# counter = outer()

# print(counter())  # 1
# print(counter())  # 2
# print(counter())  # 3

# Build counter using closure.
# def outer():
#     count = 0   # outer variable

#     def inner():
#         nonlocal count   # refer to outer's count
#         count += 1
#         return count

#     return inner

# counter = outer()

# print(counter())  # 1
# print(counter())  # 2
# print(counter())  # 3

# Implement private method using inner function
# def outer():
#     def private_method():
#         return "This is private"

#     def public_method():
#         return private_method()   # calling private inside

#     return public_method


# obj = outer()

# print(obj())        # ✅ Works
# # print(private_method()) ❌ Error (not accessible)
