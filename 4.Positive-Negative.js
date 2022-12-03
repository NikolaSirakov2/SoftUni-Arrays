function positiveNegative(arr){
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        let num = arr[i];

        if (num < 0){
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }

    for (let k = 0; k < newArr.length; k++){
    console.log(newArr[k]);
    }
}

positiveNegative([3, -2, 0, -1])