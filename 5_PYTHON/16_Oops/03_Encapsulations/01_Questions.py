# Encapsulation
# Private variable with getter/setter
# class Employee:
#     def __init__(self, salary):
#         self.__salary = salary

#     def get_salary(self):
#         return self.__salary

#     def set_salary(self, amount):
#         if amount > 0:
#             self.__salary = amount

# e = Employee(50000)
# print(e.get_salary())
# e.set_salary(60000)
# print(e.get_salary())

# Using @property
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273:
            raise ValueError("Too cold!")
        self._celsius = value

t = Temperature(25)
print(t.celsius)