function add(...values){
    const addValues=values.reduce((sum,value) => sum + value , 0);
    console.log(addValues);
}
const products = [
    { id: 1, name: 'p1', price: 100 },
    { id: 2, name: 'p2', price: 200 },  
    { id: 3, name: 'p3', price: 300 }
];

