function calculateAll(){
    var a=Number(document.getElementById("num1").value); 
    var b=Number(document.getElementById("num2").value);
    var Addition=a+b;
    var subtraction=a-b;
    var multiplication=a*b;
    var division=a/b;

   document.getElementById("result").innerHTML=
   "Addition: "+ Addition +"<br>"+"subtraction: "+subtraction+"<br>"+"multiplication: "+multiplication+"<br>"+"division: "+division;

}