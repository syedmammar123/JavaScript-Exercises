// // *****************************Chapter 20-30********************************************
// // Changing case

// //1

// var caps=prompt("Enter your name:").toUpperCase()
// console.log(caps)

// //2
// var title=prompt("Enter your sentence:")
// var arr=title.split(" ");
// var sarr=[];
// for(var i=0;i<arr.length;i++){
//     if (arr[i]!=""){
//     fLetter=(arr[i].charAt(0)).toUpperCase()
//     otherLetters=(arr[i]).slice(1);
//     rejoin=fLetter+otherLetters
//     sarr.push(rejoin)}
    

// }
// console.log(sarr.join(" "))

// //Strings: measuring length and extracting parts
// //1
// console.log(prompt("enter model of your favourite phone").length)

// //2
// var last=prompt("Enter a string");
// console.log(last.slice(-1))

// // Strings: finding segments
// //1
// console.log("Pakistan".indexOf("n"))

// //2
// var username=prompt("enter username");
// for(var i=0;i<username.length;i++){
//     var checker=i;
//     if(username[i]=="?" || username[i]=="." || username[i]=="," || username[i]=="@" || username[i]=="!"){
//         console.log("invalid username")
//         var username=prompt("enter user name");
//         checker=i;
//         i=0;
//     }
//     if(checker==username.length-1){
//         console.log("correct username")
//     }
// }

// //3
// var text="The quick brown fox jumps over the lazy dog".toLowerCase()
// var count=0;
// for(var i=0;i<text.length;i++){
//     var word=text.slice(i,i+3)
//     if(word=="the"){
//         count++
//     }
// }
// console.log("Word 'the' found",count,"times")

// //Strings: finding a character at a location
// //1
// document.write("<h1>"+"Pakistan".charAt(3))

// // Strings: replacing characters

// //1
// var city="Hyderabad"
// console.log(city.replace("Hyder","Islam"))

// //2
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// console.log(message.replace(/and/g,"&"))

// // Rounding numbers

// //1
// var num=+prompt("Enter any positive number");
// console.log(num);
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

// //2
// var num=+prompt("Enter any negative number");
// console.log(num);
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

// //Generating random numbers
// //1
// dice=Math.random()*6

// console.log(Math.ceil(dice))

// //2
// coin=Math.random()*2
// if(Math.ceil(coin)==1){
//     console.log("HEADS")
// }
// else   
//  console.log("TAILS")

// //3


// flag=true;
// while(flag){
    
//     var num=Math.ceil(Math.random() * 10);
//     var input=+prompt("Enter an number to guess between 1-10 type 0 to EXIT")
//     if(input==num){ 
//         alert("Yeah! right guess")
//         flag=false;
        
// }

// else if(input==0){
//     flag=false;
// }
    
// else 
//     alert('Not matched, the number was '+num)
// }
// //Converting strings to integers and decimals
// var weight=parseInt(prompt("Enter your weight"))
// console.log(weight)

// //Converting strings to numbers, numbers to strings
// //1
// var str="472"
// console.log("before conversion",typeof(str))
// console.log(str)
// var num=Number(str)
// console.log("after conversion", typeof(num))
// console.log(num)

// //2
// var num=35.36
// var str=num.toString()
// str=str.replace(".","")
// console.log("before conversion",typeof(num))
// console.log(num)


// console.log("after conversion", typeof(str))
// console.log(str)

// //Controlling the length of decimals
// //2
// var percentage = 30 / 45 * 100;
// console.log(percentage.toFixed(2))




// // ************************************************Chapter 31-34***********************************************


// //1
// var todayDate=new  Date();
// console.log(todayDate);
// //2
// var a = todayDate.toString();
// var b = a.slice(4,7);
// if (b === "Jan"){
//     alert("Current month: January")
// }
// else if(b === "Feb"){
//     alert("Current month: February")
// }
// else if(b === "Mar"){
//     alert("Current month: March")
// }
// else if(b === "Apr"){
//     alert("Current month: April")
// }
// else if(b === "May"){
//     alert("Current month: May")
// }
// else if(b === "Jun"){
//     alert("Current month: June")
// }
// else if(b === "Jul"){
//     alert("Current month: July")
// }else if(b === "Aug"){
//     alert("Current month: August")
// }
// else if(b === "Sep"){
//     alert("Current month: September")
// }
// else if(b === "Oct"){
//     alert("Current month: October")
// }
// else if(b === "Nov"){
//     alert("Current month: November")
// }
// else if(b === "Dec"){
//     alert("Current month: December")
// }
// // 3
// var todayDate=  Date();

// var a=todayDate.toString();
// var b=a.slice(0,3);
// alert("Today is"+" "+ b)

// //4
// var todayDate=  Date();
// var a=todayDate.toString()

// var b=a.slice(0,3);
// console.log(b)
// if(b=="Sat" || b=="Sun")
// {
//     console.log("its is fun day")
// }

// //5
// var todayDate=new Date()
// var a=todayDate.getDate()
// if(a<=15){
//     console.log("first fifteen days")
// }
// else
// console.log("Last days of month")

// //6
// var todayDate = new Date();
// console.log("current date : "+todayDate)
// console.log("Time in millisecond since 1970: "+todayDate.getTime())
// var a=(todayDate.getTime()/(1000*60)).toFixed(0)
// console.log("Time in minutes since 1970: "+a)

// //7
// var todayDate = new Date();
// var a=todayDate.toString();
// var b=a.slice(16,18);
// if (+b<12){
//     console.log("It's AM")
// }
// else     
// console.log("It's PM")

// //8
// var a = new Date();
// a.setDate(00)
// a.setMonth(11);
// a.setFullYear(2020);
// a.setHours(00)
// a.setMinutes(00)
// a.setSeconds(00)
// console.log("later date",a)

// //9

// var todayDate = new Date();
// var specDate = new Date("05-18-2015")

// var currentTime=todayDate.getTime();
// var specDateTime=specDate.getTime()

// var a = currentTime-specDateTime;
// var b=(a/(1000*60*60*24)).toFixed(0)

// console.log(b,"days have passed since 1st Ramadan 2015")

// //10
// var refDate = new Date("01-01-2015");
// var specDate = new Date("12-05-2015")
// specDate.setHours(22);
// specDate.setMinutes(50);
// specDate.setSeconds(16);
// console.log(refDate)
// console.log(specDate)

// var refDate=refDate.getTime();
// var specDateTime=specDate.getTime()

// var a = specDateTime-refDate;
// var b=(a/(1000)).toFixed(0)

// console.log(b,",seconds have passed since beginning 2015")

// //11
// var todayDate=new Date();
// console.log("current date :",todayDate)
// var a=todayDate.getHours()
// todayDate.setHours(a+1);
// console.log("one hour ago",todayDate)

// //12
// var todayDate=new Date();
// console.log("current date :",todayDate)
// var a=todayDate.getFullYear()
// todayDate.setFullYear(a-100);
// console.log("100 years back",todayDate)

// //13
// var todayDate=new Date();
// var age=prompt("Enter your age")
// b=todayDate.getFullYear()
// todayDate.setFullYear(b-age)
// console.log("You were born in",todayDate.getFullYear())

// //14
// var name=prompt("Enter your name");
// var mon=prompt("Enter the month");
// var units=prompt("Enter your no of uints used");
// var chargePerUnit=16;
// var net=units*chargePerUnit;
// var late=350;
// var gross=net+late;

// document.write("<h1>K-Electric Bill</h1>")

// document.write("Customer name:"+"<h4>"+name+"</h4>")
// document.write("Month: ","<h4>"+mon+"</h4>")
// document.write("Number of Units","<h4>"+units+"</h4>")
// document.write("Charges Per Units","<h4>"+chargePerUnit+"</h4>")
// document.write("Net Amount Payable (within Due Date)","<h4>"+net+"</h4>")
// document.write("Late Payment Surcharge","<h4>"+late+"</h4>")
// document.write("Gross Amount Payable (after Due Date)","<h4>"+gross+"</h4>")

// // Chapter 34-38************************************************************************

// //1
// function datetime(){
//     var todayDate=new Date();
//     console.log(todayDate);

// }
// datetime();

// //2
// function greet(fname,lname){
//     console.log("Good evening ",fname,lname)
// }
// greet("syed muhammad","ammar")

// //3
// function add(){
//     var a=+prompt("Enter first number")
//     var b=+prompt("Enter second number")
//     var c=a+b;
//     return c;

// }
// d=add()
// console.log("the sum is",d)

// //4
// function calculator(num1,num2,opr){
//     if(opr=="+"){
//         a=num1+num2}
//     else if(opr=="-"){
//         a=num1-num2}
//     else if(opr=="*"){
//         a=num1*num2}
//     else if(opr=="/"){
//         a=num1/num2}
    
//     console.log(a)
    
//     return a
    
// }
// calculator(1,2,"*")

// //5
// function square(a)
//     {
//         return a*a;
//     }
// console.log(square(4))

// //6
// function fact(a){
//     let factorial=a;
//     for(let i=1; i<a;i++){
//         factorial=factorial*i;
//     }

//     console.log("factorial is",factorial)
//     }


// fact(6)


// //7
// function count(start,end){
//     for(let i=start;i<=end;i++){
//         console.log(i)
//     }
// }
// count(11,20)

// //8
// function calculateHypotenuse(){
//     function calculateSquare(num)
//     {
//         return num*num;
//     }
    
//     var a=calculateSquare(prompt("Enter Base"))  
//     var b=calculateSquare(prompt("Enter perpendicular"));
    
//     var base=calculateSquare(a)
//     var perp=calculateSquare(b);
//     var hypo=base+perp;
//     var answer=Math.sqrt(hypo);

//     console.log(answer.toFixed(2))

// }
// calculateHypotenuse()

// //9
// function area(w,h){
//     return w*h
// }
// var a=2
// var b=3
// console.log("i",area(2,3));
// console.log("ii",area(a,b))

// //10
// var d=prompt("enter word")
// function palindrome(word){
//     var a=word.split("");
//     console.log(a)
//     var b=a.reverse();
//     var c=b.join("")
//     console.log(a)

//     if(word.toLowerCase()==c.toLowerCase()){
//         alert("yes it is palindrime")
//     }
//     else
//     alert("NO it is not a palindrime")

// }
// palindrome(d)

// //11

// function upper(word){
//     var a=word.split(" ");
//     var b=[];
//     for(let i=0;i<a.length;i++){
//         var single=a[i];
//         var first=(single.slice(0,1)).toUpperCase()
//         var remain=single.slice(1)        
//         var complete=first+remain;
//         b[i]=complete
//         // b.push(complete)
//     }
//     return b.join(" ")

//  }

// console.log(upper("a quick brown fox"))

// //12
// console.log("hi")
// function longest(word){
//     var count;
//     var len=0;
//     a=word.split(" ");
//     for(let i=0; i<a.length ;i++){
//         if(a[i].length>len){
//         len=a[i].length;
//         count=i;
//     } 
//     console.log(a[i].length)
//     }
//     console.log("The largest word is ",a[count])
// }
// longest("Web Development Tutorial");


// //13
// function counter(str,alphabet){
//     a=str.toLowerCase()
//     b=alphabet.toLowerCase()
//     var count=0;
//     for(var i=0 ;i<str.length;i++){
//         if (a[i]==b){
//             count++;
//         }
//     }
//     console.log("the",alphabet,"occurs",count,"times")

// }
// counter('JSResourceS.com', 'o')

// //14
// PI=Math.PI;
// function calcCircumference(radius){
//     result=2*PI*radius;
//     console.log("The circumference is "+result)

// }

// function calcArea(radius){
//     result=PI*(radius*radius);
//     console.log("The area is "+result)
   
// }
// calcCircumference(20);
// calcArea(20)


// // Chapter 38-42************************************************************************
// //1
// function power(a,b){
//     return (a**b)
// }
// console.log(power(3,2))

// //2
// function leap(a){
//     var yr=parseInt(a);
//     var todayDate=new Date("02-29-"+yr).getDate()==29
    
//     if(todayDate){
//         return ("yes it is leap year")
//     }
//     else
//     return ("No it is not a leap year")

// }
// console.log(leap(2020))

// //3
// function area(a,b,c){
//     var se;    
//     function s(){
//         se=(a+b+c)/2
//          return se;
//     }
//     s()

//     var area=Math.sqrt(se*(se-a)*(se-b)*(se-c))
//     console.log("the area is: "+area)
// }

// area(3,6,7)

// //4
// function mainFunction(m1,m2,m3){
//     var avg,per;
//     function average(){
//         avg=(m1+m2+m3)/3;
//         return avg;
//     }
//     function percentage(){
//         per=(((m1+m2+m3)/300)*100).toFixed(2)
//         return per;
//     }
//     average()
//     percentage();
//     console.log("The average is:",avg)
//     console.log("The percemtage is:",per)

// }

// mainFunction(80,90,94)

// //5
// function index(a,b){
//     arr=a.split("")
//     for(var i=0;i<=a.length;i++){
    
//         if (b==a[i]){
//             console.log(b,"found at index",i)
//             break;
//         }
            
//         }
//     }
// index("i am index checker","n")

// //6
// function delvowel(a){
//     arr=a.split("");
//     console.log("with vowels::",a)

//     for(var i=0;i<=a.length;i++){
//     if(arr[i]=="a" || arr[i]=="e"|| arr[i]=="i" ||arr[i]=="o"||arr[i]=="u"){
//         arr.splice(i,1)
//         i--;
//     }
    

// }
// console.log("without vowels::",arr.join(""));
// }
// delvowel("a quick brown fox jumps over a lazy dog")


// //7
// function delvowel(a){

//     function vowelChk(a){
//         switch(a){
//             case "a":
//             case "e": 
//             case "i":
//             case "o":       
//             case "u":
//             case "A":
//             case "E": 
//             case "I":
//             case "O":       
//             case "U":
//                 return true;
//             default:
//                 return false;
//         }
        
//         }

    

//     var count=0

//     for(var i=0;i<a.length;i++){
//         if(vowelChk(a[i]) && vowelChk(a[i+1])){
//             count++
//         }
//     }
//     return console.log("Count of number of occurrences of any two vowels in succession is",count)
// }

// delvowel("Pleases read this application and give me gratuity")




// //8
// function meters(km){
//     var meter=km*1000
//     return console.log("Enter the distance in meters is",meter.toFixed(2))
// }
// function feets(km){
//     var feet=km*3281

//     return console.log("Enter the distance in feets is",feet.toFixed(2))
// }
// function inches(km){
//     var inch=km*39370

//     return console.log("Enter the distance in inches is",inch.toFixed(2))
// }
// function centimeters(km){
//     var centimeter=km*100000

//     return console.log("Enter the distance in centimeters is",centimeter.toFixed(2))
// }

// var km= +prompt("Enter the distance in km");
// meters(km)
// feets(km)
// inches(km)
// centimeters(km)

// //9

// function overtime(){
//     hrs= +prompt("Enter total numbers of hours an employee has worked")
//     if(hrs>40){
//         overtime = hrs-40;
//         pay=overtime*12;
//         return console.log("By overtime worker earned Rs",pay)

//     }
//     else
//         return console.log("The worker has not worked overtime")
// }

// overtime()

// //10
// function cashier(amount){
//     var hundred=0,fifty=0,ten=0,leftover=0
//     if(amount>100){
//         hundred=(amount/100)
//         console.log(Math.floor(hundred))
//         leftover=((amount/100)-(Math.floor(hundred)))*100
//         console.log(leftover)
//     }
//     else
//         leftover=amount;
    
//         if(leftover>=50){
//         fifty=1
//         leftover=leftover-50;
//         ten=(leftover/10).toFixed(0)
//     }
//     else
//         ten=(leftover/10).toFixed(0)

//     return console.log("You will have",Math.floor(hundred),"hundred notes",fifty,"fifty notes",ten,"ten notes")

// }
// var amount=prompt("Enter amount to withdraw")
// cashier(amount)




