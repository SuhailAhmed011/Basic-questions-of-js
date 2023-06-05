
     

   function addNumbers(num1 , num2){
         console.log(`${num1} + ${num2} = ${num1 + num2}`)
    }

    addNumbers(4, 9);

    // Generate Random Numbers

    let x = Math.floor(Math.random() * 10) +1;
    console.log(x);

    function getRandomNum(min , max){
      let x = Math.floor(Math.random() * (max - min)) + min;
      return x;
    }

    console.log(getRandomNum(10, 20)); 

    /*Date and Time Object

    let x = new Date();
    console.log(x); // it takes time and date from your pc.

    let y = new Date(2023, 5, 8, 10, 23, 44, 9);
    console.log(y); 


    let person = {
      name : "suhail",
      age : 21,

       setname(n){
       this.name = n.toUpperCase();
      }
    };

    person.setname= "suhail";
    console.log(person);*/

    //let Arr = ["suhail", "Ahmed", "suhail", "Ahmed", "Quazi"];

   // let removeDuplicate = Arr.filter((items, index)=> Arr.indexOf(items) == index);

   // console.log(removeDuplicate);

   //console.log(typeof(Arr));

   
    /* cut array length
   let num = [4,5,4,6,7,5];
   num.length= 3;
   console.warn(num); */

   /* add values of array

   let num = [4,5,4,6,7,5];
   let sum = num.reduce((x,y)=>x+y);
   console.log(sum); */

   /* duplicate value from array

   let num = [4,5,4,6,7,5];
   let unique = new Set(num);
   console.log([...unique]);*/

   /* destructuring swap two numbers

   let x = 10, y = 20;
   [x,y]=[y,x];
   console.log(x,y); */

   /* generate random numbers between the numbers

   function getRandomNum(min , max){
    let x =Math.floor(Math.random() * (max - min)) + min;
    return x;
   }

   console.log(getRandomNum(10,20)); */

   /* sum of array loop

   let arr =[4,5,7,9,2,5];
    let sum = 0 ;

   for(let i=0; i<=5; i++){
      sum = sum + arr[i];
   }

   console.log("total of array is : " + sum); */

   /* immutable value that cant change after created

   let a = 10;
   let b = a;

   b = b + 1;
   console.log(a);
   console.log(b); */

   /* mutable values we can change after created

   let a = ['suhail', 'ahmed'];
   let b = a;

   b.pop();
   console.log(a); 
   console.log(b);  

   
   let person = {
    firstName : 'suhail',
    lastName : 'ahmed' , 
    sayHello (){
        console.log("hello, I am a "+ this.firstName +" and my "+ car.brand +" car");
    }
   };

   let car = {
    brand : 'porche' ,
    model : 'safari'
   };

   person.sayHello();

  let number = [1,2,3,4,5,6];
  let fil = number.filter((num) => num % 2 === 0);
  console.log(fil); 

  let number = [3,5,6,1,8];
 let sum = number.reduce(function(a , b){
  return a + b;
 }, 0);

 console.log(sum);

 const col = ["red", "green", "blue"];
 col.forEach(function(color, index){
  console.log(`colour at index ${index} at ${color}`);
 }); 


 let arr = [1,2,1,3,3,3,4,56];
 let unique = arr.filter((Index, Value) =>{
  return arr.indexOf (Index) === Value;
  
 });
 console.log(unique);

 let x = 12;
 let y = 14;
 [x,y] = [y,x];
 console.log(x);
 console.log(y);

 let hello = new Date();
 let dateString = hello.toLocaleString();
 console.log(dateString);

 let arr1 = [1,2,3,4,5];
 console.log(arr1.push(7));
 console.log(arr1);


 let person={
  firstName : 'suhail',
  lastName : 'ahmed' ,
  sayHello(){
    console.log("my name is "+this.firstName+" and my car is "+car.brand+" okay");
  }
 };

 let car = {
  brand : 'ferrari',
model : 'tim'
 };

 person.sayHello();

function nap(){
  var x = 10;
  console.log(x);
}
x = 15;
nap();

function isSameNum(num1 , num2) {
  return num1 || num2;
}
console.log(isSameNum(2,2));



 function footballPoints(wins,draws, losses){
 return (wins * 3) + (draws * 1) + (losses * 0);
 };

 console.log(footballPoints(3,4,2));



function convert(hours, minutes){
return (hours*60 + minutes * 60) * 60;
};

console.log(convert(1,3));

/*Profitable Gamble
Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)
... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

Examples
profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.9, 1, 2) ➞ false

profitableGamble(0.9, 3, 2) ➞ true
Notes
A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing. */


/*function profitableGamble(probability_of_winning, prize, pay){
   if(probability_of_winning * prize > pay){
    console.log(true)
  } else{
    console.log(false)
  }
};

console.log(profitableGamble(0.9, 1, 2)); 

function boolToString(flag){
return flag ? 'true' : 'false';
};
let heyFlag=true;
let flagToString = boolToString(heyFlag);
console.log(flagToString);


function calculator(expression){
return expression;
}
(calculator(2+2));
(calculator(3*2+5));
(calculator(4/2+10-2));

function makesTen(a , b){
return a===10 || b===10 || a+b===10;
};
console.log(makesTen(8,2));
console.log(makesTen(3,10));
console.log(makesTen(4,1));

function calculateFuel(dis){
let fuel = dis * 10;
if(fuel<100){
  return 100;
}else{
  return fuel;
}
};
console.log(calculateFuel(15))
console.log(calculateFuel(23.5))
console.log(calculateFuel(3))

function calculateSum(Numbers){
  let sum = 0;
  for(let i =0; i<Numbers.length; i++){
    sum +=Numbers[i];
    
  }
  return sum;
};

const numbers =[2,3,4,5,1];
const sumOfNum =calculateSum(numbers);
console.log(sumOfNum);


function reversedStr(Name){
  return Name.split('').reverse().join('');
}
const reversedName = "suhail";
const myName =reversedStr(reversedName);
console.log(myName);


function factorialNum(Num){
if(Num===0 || Num===1) {
  return 1;
}
return Num * factorialNum(Num-1)

}

console.log(factorialNum(10));





function newArr(number){
  let evenNum =[];
  for(let i =0; i<=number.length; i++){
    if(number[i] % 2 ===0){
      evenNum.push(number[i])
    }
  }
  return evenNum;

}
let number=[1,2,3,4,5,6,7,8];
let evenNum =newArr(number);
console.log(evenNum); var twoSum = function(nums, target) {
    
    for(let i =0; i<=nums.length; i++){
        for(let j =0; j<=nums.length; j++){
            if(nums[i] + nums[j]===target){
                return [i],[j]
            }
        }
    }
    
}var twoSum = function(nums, target) {
    
    for(let i =0; i<=nums.length; i++){
        for(let j =0; j<=nums.length; j++){
            if(nums[i] + nums[j]===target){
                return [i],[j]
            }
        }
    }
    
}

 let twoNum =function addNum(num, target){
  for(let i =0; i<num.length; i++){
    for(let j =i+1; j<num.length; j++){
      if(num[i] + num[j] === target){
        return [i,j]
      }
    }
  }
};

console.log(addNum([2,8,3,9], 10)); 

