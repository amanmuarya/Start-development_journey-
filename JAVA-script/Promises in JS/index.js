const train = new Promise(function(resolve, reject) {
    const inBoraded =false;
     if(isBoraded){
        resolce("you are elagible to onbord ")
     }else{
         reject("you  are you not elagible onbord ")
            
     }
})
train.then((data)=>{
console.log("wohoo",data);
})
.catch(()=>{
    console.log("oh no ",data );
})
.finally(()=>{
    console.log("this will be excuted all time ")
})