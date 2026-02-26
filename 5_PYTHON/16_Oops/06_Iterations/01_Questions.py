# Custom Iterator
# class EvenNumbers:
#     def __init__(self, limit):
#         self.limit = limit
#         self.num = 0

#     def __iter__(self):
#         return self

#     def __next__(self):
#         self.num += 2
#         if self.num > self.limit:
#             raise StopIteration
#         return self.num

# evens = EvenNumbers(10)

# for num in evens:
#     print(num)