#setting the data type

x="Hello World"
print(f"value of x is {x} and type of value is {type(x)}")
x=20
print(f"value of x is {x} and type of value is {type(x)}")	
x = 20.5	
print(f"value of x is {x} and type of value is {type(x)}")	
x = 1j	
print(f"value of x is {x} and type of value is {type(x)}")
x = ["apple", "banana", "cherry"]	
print(f"value of x is {x} and type of value is {type(x)}")	
x = ("apple", "banana", "cherry")	
print(f"value of x is {x} and type of value is {type(x)}")
x = range(6)	
print(f"value of x is {x} and type of value is {type(x)}")
x = {"name" : "John", "age" : 36}	
print(f"value of x is {x} and type of value is {type(x)}")	
x = {"apple", "banana", "cherry"}	
print(f"value of x is {x} and type of value is {type(x)}")
x = frozenset({"apple", "banana", "cherry"})	
print(f"value of x is {x} and type of value is {type(x)}")
x = True	
print(f"value of x is {x} and type of value is {type(x)}")
x = b"Hello"	
print(f"value of x is {x} and type of value is {type(x)}")	
x = bytearray(5)	
print(f"value of x is {x} and type of value is {type(x)}")	
x = memoryview(bytes(5))	
print(f"value of x is {x} and type of value is {type(x)}")
x = None	
print(f"value of x is {x} and type of value is {type(x)}")

#setting specific data type
#--> it forces to ddclare the data type and accordingly it will set the value

x = str('H')
print(f"value of x is {x} and type of value is {type(x)}")
x = int(20.10)
print(f"value of x is {x} and type of value is {type(x)}")


'''
--python numbers

int = 123351549565
float = 20.5015218541
complex = 11112i
'''

#random number
import random
print(random.randrange(1,10)) #it will generate random number between 1 to 10

