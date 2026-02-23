# Show difference between global and local variable.
#  1. Global Variable

# A global variable is declared outside any function and can be accessed anywhere in the program.

#  2. Local Variable

# A local variable is declared inside a function and can only be accessed within that function.

# Examples:
# x = 10   # Global variable

# def test():
#     y = 5   # Local variable
#     print(x)  # Accessible
#     print(y)  # Accessible

# test()

# print(x)  # Accessible
# print(y)  # ❌ Error (y is not defined)

# Modify a global variable inside a function using global.
# x = 10   # Global variable

# def change():
#     x = 20   # This creates a NEW local variable
#     print("Inside function:", x)

# change()
# print("Outside function:", x)

# What happens if you use same variable name locally and globally?
# x =20
# def sameVaraibles():
#     x=30
#     print("Inside the varaibles:",x)
# sameVaraibles()
# print("Outside the Varaibles:",x)

# Create counter using global variable.
# counter =1
# def counterFunc():
#     global counter
#     counter +=10
#     return counter
# print(counterFunc())


# Use nonlocal in nested functions.
# num = int(input("Enter the number:"))

# def outside(num):
#     def inside():
#         nonlocal num
#         num += 5
#         return num
#     return inside()
# print(outside(num))

