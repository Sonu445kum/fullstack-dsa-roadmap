# Create a class with constructor using self.
# class details:
#     def __init__(self,name,age):
#         self.name = name
#         self.age = age
#     def printDetails(self):
#         print(f"name:{self.name}, age:{self.age}")

# # create an object
# d = details("sonu",21)
# d.printDetails()

# Show what happens if you forget self.
# class Student:
#     def greet():   #  forgot self
#         print("Hello")

# s1 = Student()
# s1.greet() # TypeError: Student.greet() takes 0 positional arguments but 1 was given

# Create method that modifies instance variable.
# class Student:
#     # constructor
#     def __init__(self,name,marks):
#         self.name = name
#         self.marks = marks

#     # print the students details
#     def printStudentDetails(self):
#         print(f"Name:{self.name}, Marks:{self.marks}")
    
#     # update marks
#     def updateMarks(self,newMarks):
#         self.marks = newMarks
#         print(f"NewMarks:{self.marks}")

# # create an object
# s1 = Student("sonu",760)
# s1.printStudentDetails()
# s1.updateMarks(90)
    


# Demonstrate difference between class and instance variable.
# class Student:
#     school = "ABC School"   #  Class Variable (shared)

#     def __init__(self, name):
#         self.name = name     #  Instance Variable (unique)

# # Create objects
# s1 = Student("Sonu")
# s2 = Student("Rahul")

# print("Before Change:")
# print(s1.name, "-", s1.school)
# print(s2.name, "-", s2.school)

# # Modify class variable
# Student.school = "XYZ School"

# print("\nAfter Changing Class Variable:")
# print(s1.name, "-", s1.school)
# print(s2.name, "-", s2.school)

# # Modify instance variable for only s1
# s1.name = "Amit"

# print("\nAfter Changing Instance Variable of s1:")
# print(s1.name, "-", s1.school)
# print(s2.name, "-", s2.school)

# # Create class counter using self.
# class Counter:
#     def __init__(self):
#         self.count = 0   # instance variable

#     def increment(self):
#         self.count += 1

#     def decrement(self):
#         self.count -= 1

#     def reset(self):
#         self.count = 0

#     def display(self):
#         print("Current Count:", self.count)


# # Create object
# c1 = Counter()

# c1.increment()
# c1.increment()
# c1.display()     # 2

# c1.decrement()
# c1.display()     # 1

# c1.reset()
# c1.display()     # 0

# Explain why self is required.
# In Python, self is required because it represents the current object (instance).

# Without self, Python would not know:

# Which object's data to access

# Which object's variable to modify