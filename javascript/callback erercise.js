//TO PRINT A NAME

// --------------USING SETTIME OUT

function name(){

    setTimeout(() => {
        
        console.log("Mohan");

        
    }, 2000);
}

function name1(){

    setTimeout(() => {
        
        console.log("Gandhi");
        
    }, 1000);
}
name();
name1();

//------------USING CALLBACK FUNCTION

function name2(callback){

    setTimeout(() => {
        
        console.log("indhu");
        callback();
        
    }, 3000);
}

function name3(callback){

    setTimeout(() => {
        
        console.log("mathi");
        
        
    }, 1000);
}

name2(name3);

//--------------USING CALL BACK HELL

function Name(callback){

    setTimeout(() => {
        
        console.log("Madhu");
        callback();

    }, 7000);
}

function Name1(callback){

    setTimeout(() => {
        
        console.log("aparna");
        callback();
        
    }, 3000);
}

function Name2(callback){

    setTimeout(() => {
        
        console.log("good");
        callback();
        
    }, 10000);
}

function Name3(callback){

    setTimeout(() => {
        
        console.log("bad");
        callback();
        
    }, 4000);
}

Name(()=>{
    Name1(()=>{
        Name2(()=>{
            Name3(()=>{console.log("neither");
            })
        })
    })
})
