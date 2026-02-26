# Encapsulation
class Employee:
    def __init__(self, salary):
        self.__salary = salary

    def get_salary(self):
        return self.__salary

    def set_salary(self, amount):
        if amount > 0:
            self.__salary = amount

e = Employee(50000)
print(e.get_salary())
e.set_salary(60000)
print(e.get_salary())