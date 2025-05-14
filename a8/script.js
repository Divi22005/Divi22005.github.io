function addition() {
    var a = Number(document.getElementById("num1").value); 
    var b = Number(document.getElementById("num2").value);
    document.getElementById("addition").innerHTML = "Addition: " + (a + b);
}

function subtraction() {
    var a = Number(document.getElementById("num1").value); 
    var b = Number(document.getElementById("num2").value);
    document.getElementById("subtraction").innerHTML = "Subtraction: " + (a - b);
}

function multiplication() {
    var a = Number(document.getElementById("num1").value); 
    var b = Number(document.getElementById("num2").value);
    document.getElementById("multiplication").innerHTML = "Multiplication: " + (a * b);
}

function division() {
    var a = Number(document.getElementById("num1").value); 
    var b = Number(document.getElementById("num2").value);
    if (b === 0) {
        document.getElementById("division").innerHTML = "Division: Cannot divide by zero";
    } else {
        document.getElementById("division").innerHTML = "Division: " + (a / b).toFixed(2);
    }
}
