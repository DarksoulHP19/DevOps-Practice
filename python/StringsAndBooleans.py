print('hello')
print("world")

print("It's a beautiful day")
print('It\'s a beautiful day')

#multiline string
print('''It's a beautiful day
and I am loving it,
I am learning python,i am getting better at it.''')


a="🫡🫡Hello world"
print(a[6])

# priniting string in column
for x in "banana":
  print(x)

# length of string
a = "Hello, World!"
print(len(a))

# check string
txt = "The best things in life are free!"
if("free" in txt):
    print("Yes, 'free' is present in the string")

# slicing string
b = "Hello, World!"
#    01234567891011
print(b[2:5])#from 2nd index to 5th index
print(b[:5])#from start to 5th index
print(b[2:])#from 2nd index to end

print(b[-5:-2])#negative indexing 

#modify strings
a = "Hello, World!"
print(a.upper()) #upper case
print(a.lower()) #lower case
a1 = "      Hello"
print(a1.strip()) #remove white space from start and end
print(a.replace("H", "J")) #replace H with J

#split string
print(a.split(",")) #split by ,

#concatenate string
a = "Hello"
b = "World"
c = a + " " + b
print(c)

# f strings
age = 36
txt ="My name is John, and my age is "
print(f"{txt}{age}")

#escape character
txt = "We are the so-called \"Vikings\" from the north." # \" is used to escape the double quote"
print(txt)
'''
\'	Single Quote	
\\	Backslash	
\n	New Line	
\r	Carriage Return	
\t	Tab	
\b	Backspace	
\f	Form Feed	
\ooo	Octal value	
\xhh	Hex value

'''


# string methods
'''
Method	Description
capitalize()	Converts the first character to upper case
casefold()	Converts string into lower case
center()	Returns a centered string
count()	Returns the number of times a specified value occurs in a string
encode()	Returns an encoded version of the string
endswith()	Returns true if the string ends with the specified value
expandtabs()	Sets the tab size of the string
find()	Searches the string for a specified value and returns the position of where it was found
format()	Formats specified values in a string
format_map()	Formats specified values in a string
index()	Searches the string for a specified value and returns the position of where it was found
isalnum()	Returns True if all characters in the string are alphanumeric
isalpha()	Returns True if all characters in the string are in the alphabet
isascii()	Returns True if all characters in the string are ascii characters
isdecimal()	Returns True if all characters in the string are decimals
isdigit()	Returns True if all characters in the string are digits
isidentifier()	Returns True if the string is an identifier
islower()	Returns True if all characters in the string are lower case
isnumeric()	Returns True if all characters in the string are numeric
isprintable()	Returns True if all characters in the string are printable
isspace()	Returns True if all characters in the string are whitespaces
istitle()	Returns True if the string follows the rules of a title
isupper()	Returns True if all characters in the string are upper case
join()	Joins the elements of an iterable to the end of the string
ljust()	Returns a left justified version of the string
lower()	Converts a string into lower case
lstrip()	Returns a left trim version of the string
maketrans()	Returns a translation table to be used in translations
partition()	Returns a tuple where the string is parted into three parts
replace()	Returns a string where a specified value is replaced with a specified value
rfind()	Searches the string for a specified value and returns the last position of where it was found
rindex()	Searches the string for a specified value and returns the last position of where it was found
rjust()	Returns a right justified version of the string
rpartition()	Returns a tuple where the string is parted into three parts
rsplit()	Splits the string at the specified separator, and returns a list
rstrip()	Returns a right trim version of the string
split()	Splits the string at the specified separator, and returns a list
splitlines()	Splits the string at line breaks and returns a list
startswith()	Returns true if the string starts with the specified value
strip()	Returns a trimmed version of the string
swapcase()	Swaps cases, lower case becomes upper case and vice versa
title()	Converts the first character of each word to upper case
translate()	Returns a translated string
upper()	Converts a string into upper case
zfill()	Fills the string with a specified number of 0 values at the beginning
'''  

# Boolean Values

print(10 > 9) #true
print(10 == 9) #false
print(10 < 9) #false