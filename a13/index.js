const items = [
  {id: 1, name: "apple", price: 50, qty: 3, status: "pending" },
  {id: 2, name: "banana", price: 30, qty: 5, status: "pending" },
  {id: 3, name: "orange", price: 80, qty: 2, status: "pending" },
];

const updateItems = items.filter(item =>item.qty >2).map((item) => 
  ({...item, price: item.price + 5, total: (item.price + 5) * item.qty, status: "complete"}));

console.log(updateItems);
