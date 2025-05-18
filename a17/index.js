
add(1,2,3,4,5,6,7);

function add(...values){
    const addValues=values.reduce((sum,value) => sum + value , 0);
    console.log(addValues);
}
