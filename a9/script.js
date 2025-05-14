let fruits = ["apple", "banana", "orange", "mango"];

document.getElementById("searchButton").addEventListener("click", function () {
    let input = document.getElementById("inputField").value;
    let result = fruits.filter(fruit => fruit.toLowerCase() === input);

    if (result.length > 0) {
        document.getElementById("result").textContent =  " "+ result[0];
    } else {
        document.getElementById("result").textContent = "Item not found";
    }
});
