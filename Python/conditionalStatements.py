# even or odd 
num = int(input("Enter number: "))
if(num%2==0):
    print("It is a even number")
else:
    print("It is a odd number")

# multiple of 7
check = int(input("Enter number: "))
if(check%7==0):
    print("It is multiple of 7")
else:
    print("Not a multiple of 7")

# gretest of three numbers
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
num3 = int(input("Enter third number: "))
if(num1>num2 and num2>num3):
    print("First number is greater then other: ",num1)
elif(num2>num1 and num1>num3):
    print("Second number is greater then other: ",num2)
else:
    print("Third number is greater then other: ",num3)