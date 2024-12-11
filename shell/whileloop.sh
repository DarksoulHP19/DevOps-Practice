count=0
num=10

while [ $count -lt $num ]
do 
    echo "Number is $count"
    let count++
done

sleep 2