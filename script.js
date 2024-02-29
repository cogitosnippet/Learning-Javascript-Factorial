console.log("factorial");


// using loop method

let number = prompt("Enter number")

let ans=1;
const factorial = (num) => {
  for (i=1; i<=num; i++){
    ans = ans * i;
  }
}

factorial(number);
console.log(ans);


// using array and reduce method

let array = [];
for (let i = 1; i<=number; i++){
  array.push(i);
}

const factorial_second_method = (a,b)=>{
  return a*b;
}
const answer = array.reduce(factorial_second_method);
console.log(answer);



