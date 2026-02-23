# Function that sums unlimited numbers using *args.
# def sumNumber(*args):
#     total = 0
#     for num in args:
#         total +=num
#     return total
# print("The Sum of unlimited Number:",sumNumber(1,2,3,4,5))
# print("The Sum of unlimited Number:",sumNumber(1,2,3,4,5,6,7))
# print("The Sum of unlimited Number:",sumNumber(1,2,3,4,5,6,7,8,9))

# Print all keyword arguments using **kwargs.
# def printDetails(**kwargs):
#     for key ,value in kwargs.items():
#         print(f"{key}:{value}")
# printDetails(name = "sonu",age=20,city="Delhi")

# Combine *args and **kwargs.
# def combinedExample(a, b, *args, **kwargs):
#     print("a =", a)
#     print("b =", b)
#     print("args =", args)
#     print("kwargs =", kwargs)


# combinedExample(10, 20, 30, 40, name="Sonu", city="Delhi")

# Write function that finds maximum using *args.
# def findMax(*args):
#     max = 0
#     for num in args:
#         if num > max :
#             max = num
#     return max
# print("The Max value:",findMax(1,2,3,4,5))

# Pass list into function using *.
# li = [1,2,3,4,5]
# def passList(*args):
#     for listNum in args:
#         print(listNum)
# passList(li)
# Pass dictionary using **.
# dic = {"name" :"sonu", "age" : 21, "city":"Gurugaon","address" : "sector39"}
# def passDict(**kwargs):
#     for key,value in kwargs.items():
#         print(f"{key}:{value}")

# passDict(**dic)