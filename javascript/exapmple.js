// let x="7";
// console.log(x++);    
// console.log(x);

let a=[1,2,3];
 a[5]=6;
 console.log(a.length);

 console.log(5 && 1);
 console.log(5 || 1);


 const obj={a:1}
 obj.a=4;
 console.log(obj);

// 

// class wwe{
//     constructor(pl_name,ref_name,city,time){
//         this.pl_name=pl_name;
//         this.ref_name=ref_name;
//         this.city=city;
//         this.time=time;
//     }


// raw(){
//     console.log(`Player Name:${this.pl_name}\nReferee Name:${this.ref_name}\nCity:${this.city}\nTime:${this.time}`);
    
// }

// }
// const smack = new wwe("john","cena","tokyo",10);
// smack.raw();

class college
{
    constructor(name,place,state)
    {
        this.name=name;
        this.place=place;
        this.state=state;
    }
//}
//  const college1=new college("SREC","Coimbatore","Tamil Nadu");
//  const college2=new college("SRIT","Coimbatore","Tamil Nadu");
//  console.log(college1);
//  console.log(college2);
 
 organisation(){
    console.log(`College name: ${this.name}\nplace: ${this.place}\n state : ${this.state} `);
    
 }
}

const col=new college("fdtf","cbe","tn");
col.organisation();