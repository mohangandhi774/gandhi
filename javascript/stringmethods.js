//stringmethods

   //length
   //toUpperCase()
   //toLowerCase()
   //charat(index)
   //indexOf()
   //lastIndexOf()
   //slice()
   //substring()
   //repalce()
   //replaceAll()
   //trim()
   //split()
   //concat()
   //startsWith()
   //endsWith()
   //includes()

   //lenth-----RETURNS THE LENGTH OF THE STRING

   let ln="hello";
   console.log(ln.length);


   //toUpperCase---------CONVERTS THE ENTIRE STRING TO UPPERCASE

   let up="hello";
   console.log(up.toUpperCase()
   );


   //toLowerCase-----------CONVERTS THE ENTIRE STRING TO LOWERCASE

   let low="HELLO";
   console.log(low.toLowerCase()
   );
   
   
   //charat(index)-----------RETURNS THE CHARACTER OF THE SPECIFIED INDEX

   let ch="Chennai City Center Capital";
   console.log(ch.charAt(13));


   //indexOf()---------------RETURNS THE INDEX FROM THE FIRST OCCURENCE OF GIVEN STRING

   let ind="Chennai City Center Capital";
   console.log(ind.indexOf("n"));


   //lastIndexOf()------------RETURNS THE INDEX FROM THE LAST OCCURENCE OF GIVEN STRING

   let las="Chennai City Center Capital";
   console.log(las.lastIndexOf("C"));


   //slice()-----------------EXTRACT A SECTION FROM THE STRING->BACKWARDS

   let sl="helloworld";
   console.log(sl.slice(5));


   //substring()-------------------IT IS USED TO TAKE THE PARTICULAR WORD IN THE SENTENCE--->FORWARD

   let sub="hello world";
   console.log(sub.substring(4,10));
   

   //replace()-------------------IT IS USED TO REPLACE A PARTICULAR VALUE WITH A NEW VALUE

   let rep="I am from Namakkal";
   console.log(rep.replace("Namakkal","Velur"));
   
   
   //replaceAll()------------------IT IS USED TO REPLACE ALL SAME WORDS IN A GIVEN PARAGRAPH

   let reall="Hello all hope all are good all should come fast";
   console.log(reall.replaceAll("all","I"));
   
   //trim()------------------------REMOVES WHITESPACE FROM BOTH ENDS

   let tr="     hello  ";
   console.log(tr.trim());

   //concat()-----------------------JOIN TWO OR MORE STRING

   let con="hello world";
   console.log(con.concat(".hi"));

   //startsWith()-------------------CHECKING WETHER THE GIVEN LETTER STARTS WITH SAME

   let sta="mohan";
   console.log(sta.startsWith("m"));

   //endsWith()---------------------CHECKING WETHER THE GIVEN LETTER ENFDS WITH THE GIVEN LETTER

   let end="mohan";
   console.log(end.endsWith("a")
   );


   //includes()--------------------CHECKING WETHER THE GIVEN LETTER IS INCLUDE TIN THE STRING

   let inc="how are you";
   console.log(inc.includes("y"));
   
   
   //split()------------------------SPLIT THE STRING IN TO ARRAY OF SUBSTRING

   let spl="hello";
   console.log(spl.split("e"));
   //.join("e")
   
   
   