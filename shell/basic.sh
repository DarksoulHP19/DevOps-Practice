#!/bin/bash
sum(){
    local num1=$1
    local num2=$2
    local sum=$((num1+num2))
    echo "sum of $num1 and $num2 is $sum"
}

sum 10 20
sleep 5

