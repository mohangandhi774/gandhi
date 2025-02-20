 // IT IS AN OBJECT REPRESENTING THE COMPLETION OR FAILURE OF AN ASYNCHRONIZATION OPERATION

 //RESOLVE
 
 function bat(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("It is a good bat");
        }, 2000);
    })
 }

 function ball(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("It is a good ball")
        }, 4000);
    })
 }

 function ground(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Chinnasamy ground")
        }, 7000);
    })
 }

 bat()
     .then(cricket=>{console.log(cricket);return ball()})
     .then(cricket1=>{console.log(cricket1);return ground()})
     .then(cricket2=>{console.log(cricket2);console.log("statistics")})