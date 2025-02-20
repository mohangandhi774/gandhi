// USE RESOLVE AND REJECT

function mark(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const subject=true;
            if(subject)
            {
                resolve("the mark is low");
            }
            else
            {
                reject("the mark is high");
            }
        }, 3000);
    })
}

function mark1(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const subject1=true;
            if(subject1)
            {
                resolve("good");
            }
            else
            {
                reject("average");
            }
        }, 6000);
    })
}

function mark2(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const subject2=false;
            if(subject2)
            {
                resolve("excellent");
            }
            else
            {  
                reject("worst");
            }
        }, 5000);
    })
}

// mark()
//      .catch(college=>{console.log(college);return mark1()})
//      .then(college=>{console.log(college);return mark2()})
//      .then (college=>{console.log(college);console.log("GREATt")})


async function result() {
    
    try { 
        
        const a=await mark();
        console.log(a);
        
        const b=await mark1();
        console.log(b);
        const c=await mark2();
        console.log(c);
        
    } catch (error) {
        
        console.log(error);
        
    }
}
result();