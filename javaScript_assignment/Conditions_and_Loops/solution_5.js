let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i <25);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);

let result_2="";
let j=26;
do{
    j-=1;
    result_2 += `${j} `;
} while(j>1 );
console.log(result_2);