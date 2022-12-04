function printNelement(arr, n){
    let newArr = [];

    for (let i = 0; i < arr.length; i += n){
        newArr.push(arr[i]);
    }

    return newArr;
}

printNelement(['1', '2', '3', '4', '5'], 6)