               // array mathod

     // map , filter , find , reduce 

const btech= [2,4,5, 6, 7, 4, 5, 3];
console.log(btech);
 
              // 1.map
 //    btech.map (function(){})

//    const news =btech.map((data)=> {
//     return data + 45;
//  })
//  console.log(news )

            //   short from
// const news = btech.map((data) => data + 45)
// console.log(news)

            // 2. filter

// const how = btech.filter((data)=>data<7 )
//    console.log(how)         

         //    3. find 
//    const findr=btech.find((data) =>6)      
//    console.log("hello", findr)

            //    4. reduce 

const reduceRs= btech.reduce((accumulatorValu, currentValue ) =>{
    return accumulatorValu+ currentValue
},0)
console.log("hello ", reduceRs) 