async function main(){
    let num = 6;
    const response = await setData(num);
   
    
    if(response){
        console.log("O numero e' primo ",num);
    }else{
        console.log("O numero nao e' primo ",num);
    }
}

async function setData(num){
    let indice=0;
    let sum=0;
    for (indice=1;indice<=num;indice++) {   
        if (num%indice === 0) {
            sum++;
        }
    }
    if (sum === 2)
        return true;
    else 
        return false;
}

main();

