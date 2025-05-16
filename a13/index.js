const products = [
  {id: 1, name: 'Product 1', price: 10},
  {id: 2, name: 'Product 2', price: 20},
  {id: 3, name: 'Product 3', price: 30},
];

const updatedProducts = products.map(p => `${p.name}: $${p.price + 5}`);
console.log(updatedProducts);
