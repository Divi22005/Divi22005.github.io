
function add(x,y) {
    return new Promise((resolve,reject) => {
        if(x<5){
            reject("x cannot be less than 5");
        }else{
            resolve(x+y);
        }
    });
}

function sqr(a){
    return a*a;
}

async function main(){
   try{
        let result = await add(6,5);
        let res = await sqr(result);
        console.log(res);
   } catch(err){
    console.log(err);
   }
};
main()
