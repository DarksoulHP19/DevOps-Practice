print("hello world ! ")

print(100)
print(100/10)  #divison


 #print("sum of 2 numbers is ",10+20 )  #addition
# below is the same as above.
print(f"sum of 2 numbers is {10+20} ")  #addition


# single line comment
'''
multi line comment
'''

name="Harsh" #string.
print(name,"and type of variable is ",type(name))

#ractangle area
length =10 
width = 20
print(f"area of ractangle width {width} and length {length} is {length*width}")

'''

* variable assignment rule
 1. variable name should start with alphabet or underscore
 2. variable name should not start with number
 3. variable name should not have special characters
Eaxmple:
1name ========> invalid
name1 ========> valid
_name ========> valid
name_1 ========> valid
userName ========> camel case
user_name ========> snake case
User_Name ========> Pascal case

'''

name1 = "Harshit" #string
age = 20 #integer
weight = 60.5 #float
is_student = True #boolean True/False
print(name1,age,weight,is_student)

num1 = 10
num2 = '10'
# print(num1+num2) #error
print(num1,type(num1))
print(num2,type(num2))

print(num1+int(num2)) #type casting string to integer

#type casting
a1 = 10
a2 = 20.5
a3 = int(a2)
print(a1,type(a1))
print(a2,type(a2))
print(f"a3 is {a3} and type is {type(a3)}")

#input from user
'''
name = input("enter your name : ")
print("hello",name,"!")
'''

#case sensitive
a=4
A="Harsh" 

#many values to multiple variables
a,b,c = 10,20,30
print(a,b,c)

# one value to multiple variables
q1=q2=q3=10
print(q1,q2,q3)

# unpacking a list
fruits = ['apple','banana','mango']
f1,f2,f3 = fruits
print(f"f1 is {f1},f2 is {f2} ,f3 is {f3}")

# output variables
'''
x = "awesome"
print("Python is "+x) #here print is output variable
'''

#global variable
x = "awesome"
def myfunc():
    global x #it will use global variable x
    # x = "fantastic" #it will create local variable x and will not use global variable x
    print("Python is "+x) 
myfunc()
