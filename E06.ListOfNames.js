function list(arr){
    arr.sort();

    for (let i = 0; i < arr.length; i++){
        let num = i + 1;
        console.log(`${num}.${arr[i]}`);
    }
}

list(["John",

"Bob",

"Christina",

"Ema"])