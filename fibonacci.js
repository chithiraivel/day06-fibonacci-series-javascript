

//.Print Fibonacci series

x=0;y=1;
console.log(x);
console.log(y)
for(var i=2;i<=10;i++){

    z=x+y;
    x=y;
    y=z;

    console.log(z);
}