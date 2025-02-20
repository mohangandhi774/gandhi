//settime out
//It is an asynchronous function
function task1(){
    setTimeout(() => {
        console.log("good");
        
        
    }, 5000);
}

function task2(){
    setTimeout(() => {
        
        console.log("bad");
        
    }, 3000);
}
task1();
task2();