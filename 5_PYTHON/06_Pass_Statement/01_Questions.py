# Write a function with pass and call it. What happens?
def passFun():
    pass
passFun()

# Create a class with an empty method using pass.
class PassClass:

    def passMethod(self):
        pass

p = PassClass()
p.passMethod()   # Nothing happens

# Create a recursive function skeleton using pass.
def recursive_function(n):
    
    # Base Case
    if n <= 0:
        pass   # stop condition placeholder
    
    # Recursive Case
    else:
        pass   # recursive logic placeholder


# Replace pass with actual logic to calculate factorial.
num = int(input("Enter the number:"))
fact = 1
def factorial(num):
    pass
print(factorial(num))

# Write a function template using pass and later implement it.
def calculate_area(length, width):
    pass

# Why do we use pass in abstract base classes? Demonstrate.
# We use pass in abstract methods when:
# We want to define method structure
# But we don’t want to implement it yet
# We force child classes to implement it
# pass acts as a placeholder so Python syntax remains valid.

from abc import ABC, abstractmethod

class Shape(ABC):

    @abstractmethod
    def area(self):
        pass   # Placeholder