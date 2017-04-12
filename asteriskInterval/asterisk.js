//****** First Attempt
// var str="* * * * * * * * * *";
// var countdown = str.length;
// var start=0;
// setInterval(
//     function (){
//         if(countdown>start){
//             var prev=str.slice(start,countdown);
//             if(prev.charCodeAt(countdown)!== 32){
//                 console.log(prev);
//                 countdown--;  
//             }  
//         };
// },1000);
//********* Complex Solution to The Asterisk Problem
// const printStars = (N, timeout = 1000) => {
//    return new Promise((resolve,reject) => {
//       setTimeout( () => {
//                const arr = []
//    for (let i = 0; i < N; i++){
//        arr.push('*');
//    }
//    resolve(arr.join(""));
//    },timeout);
//       });
   
// };

// const N = 30;
// let promise = printStars(N);

// for(let i = N-1; i > -1; i--){
//    promise = promise.then((str)=>{
//        console.log(str);
//        return printStars(i);
//    })
// };

// The simples that I came Up with
var times = 10;
var str = " * ";
var timer = setInterval(
    function(){
        if(times !== 0){
        console.log(str.repeat(times));
        times--;
        }else{
            console.log("That's all Folks");
            clearInterval(timer);
            };
             
    },1000);
