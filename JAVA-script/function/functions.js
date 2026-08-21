//                     named function 

// let a= 5;
// let b=4; 
//  hello (a,b)
//  let f=9;
//  let j=4;
//  hello(f,j)
//  function hello( r,k){
//     let result = r+k;
//     console.log("Result:", result);
//  }


//            Anonymous function / func experasion 
    
// let greet3=function(){
// console.log("hey hello how are you ")  
// }
// greet3();


//                   arrow function

// let greet2= (let )=>{
//    console.log("hey someone ", let  );

// }
// greet2(5);

// let greet2 = () => {
//    console.log("hey someone ",);

// }
// greet2();
 
//  only for one line use name arrow function

// const squire = (name)=>name * name 
// console.log (squire(2))


//                 callback function 

const calcuate = (a, b, operation )=> {
   return operation(a,b )
}
const summation = calcuate (4,6 ,function(n1, n2 ){
   return n1 + n2 
})
console.log(summation);