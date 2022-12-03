function sumFirstLast(arr){
    let firstN = arr.shift();
    let lastN = arr.pop();

    let sum = Number(firstN) + Number(lastN);

    console.log(sum);

}

sumFirstLast(['20', '30', '40'])