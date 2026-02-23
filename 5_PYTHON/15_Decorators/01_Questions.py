# Simple decorator that prints before function.
# def decoratorFun(func):
#     def warpper():
#         print("Before the calling functions:")
#         func()
#         print("After the Calling Functions:")
#     return warpper

# # initializes the decorator
# @decoratorFun
# def greet():
#     print("Hello Sonu kaise hoo")
# greet()

# Timing decorator.
# import time
# def timingDecorator(show):

#     def timeers():
#         print("Before the timming:",time.time())
#         start =   time.time()
#         show()
#         end   =   time.time()
#         print("After the timming:",time.time())
#         print("The Exact timming:",end - start)

#     return timeers

# @timingDecorator
# def show():
#     print("Timing Decorator:")
#     time.sleep(2)
# show()


# Decorator with arguments.
# def decoratorsArguments(func):
#     def wrapper(*args , **kwargs):
#         print("Before the calling Functions:")
#         result = func(*args , **kwargs)
#         print("After the calling Functions:")
#         return result
#     return wrapper

# # decorator
# @decoratorsArguments
# def sum(a,b):
#     return a + b
# print("The Sum of two Number:",sum(4,5))


# Multiple decorators.
# def decorator1(add):
#     def wrapper(*args , **kwargs):
#         print("Before the calling the add")
#         result = add(*args , **kwargs)
#         print("After the calling add")
#         return result
#     return wrapper

# print("End the lines here...!!!")

# def decorator2(sub):
#     def wrapper(*args , **kwargs):
#         print("Before the calling the sub")
#         result = sub(*args , **kwargs)
#         print("After the calling sub")
#         return result
#     return wrapper


# @decorator1
# def add(a,b):
#     return a + b

# print("The Sum of two Number:",add(2,3))

# @decorator2
# def sub(a,b):
#     return a - b
# print("The Diffrences of two Number:",sub(10 , 6))

# Decorator for authentication simulation.
# current_user = {"username": "sonu", "is_logged_in": True}

# def login_required(func):
#     def wrapper(*args, **kwargs):
#         if current_user["is_logged_in"]:
#             return func(*args, **kwargs)
#         else:
#             print("Access Denied! Please login first.")
#     return wrapper


# @login_required
# def view_dashboard():
#     print("Welcome to your dashboard!")


# view_dashboard()

# Implement memoization decorator

# def memoize(func):
#     cache = {}

#     def wrapper(*args):
#         if args in cache:
#             print("Fetching from cache:", args)
#             return cache[args]

#         print("Computing:", args)
#         result = func(*args)
#         cache[args] = result
#         return result

#     return wrapper
