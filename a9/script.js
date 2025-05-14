let fruits = ["apple", "banana", "orange", "mango"];

const resultList = document.getElementById("result");
const inputField = document.getElementById("inputField");

function displayFruits(filteredFruits) {
    resultList.innerHTML = "";
    
    if (filteredFruits.length > 0) {
        filteredFruits.forEach(fruit => {
            const li = document.createElement("li");
            li.textContent = fruit;
            resultList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "Item not found";
        resultList.appendChild(li);
    }
}
displayFruits(fruits);
inputField.addEventListener("input", function () {
    const input = this.value.toLowerCase();
    const filtered = fruits.filter(fruit => fruit.toLowerCase().includes(input));
    displayFruits(filtered);
});
