//Exercitiul 1: Display the larger number.
let number1=-10;
let number2=9;

if (number1>number2) {
  console.log(`The larger number is ${number1}`);
} else {
  console.log(`The larger number is ${number2}`);
}

//Exercitiul 2: Find the sign of product of three numbers.
let a=3;
let b=-7;
let c=2;

if (a>0 && b>0 && c>0) {
  console.log('The sign is +');
} else if (a<0 && b<0 && c<0) {
  console.log('The sign is -');
} else if (a>0 && b<0 && c<0) {
  console.log('The sign is +');
} else if (a>0 && b>0 && c<0) {
  console.log('The sign is -');
} else if (a>0 && b<0 && c>0) {
  console.log('The sign is -');
} else if (a<0 && b>0 && c>0) {
  console.log('The sign is -');
} else if (a<0 && b<0 && c>0) {
  console.log('The sign is +');
} else {
  console.log('The sign is +');
}

//Exercitiul 3: Sort three numbers.
let x=0;
let y=-1;
let z=4;

if (x>y && x>z && y>z) {
  console.log(`${x}, ${y}, ${z}`);
} else if (x>y && x>z && y<z) {
  console.log(`${x}, ${z}, ${y}`);
} else if (y>x && y>z && x>z) {
  console.log(`${y}, ${x}, ${z}`);
} else if (y>x && y>z && x<z) {
  console.log(`${y}, ${z}, ${x}`);
} else if (z>x && z>y && x>y) {
  console.log(`${z}, ${x}, ${y}`);
} else if (z>x && z>y && x<y) {
  console.log(`${z}, ${y}, ${x}`);
} else {
  console.log('Invalid item');
}


//Exercitiul 4: Find the largest of 5 numbers.
let n1=-5;
let n2=-2;
let n3=-6;
let n4=0;
let n5=-1;

if (n1>n2 && n1>n3 && n1>n4 && n1>n5) {
  console.log(n1);
} else if (n2>n1 && n2>n3 && n2>n4 && n2>n5) {
  console.log(n2);
} else if (n3>n1 && n3>n2 && n3>n4 && n3>n5) {
  console.log(n3);
} else if (n4>n1 && n4>n2 && n4>n3 && n4>n5) {
  console.log(n4);
} else {
  console.log(n5);
}
