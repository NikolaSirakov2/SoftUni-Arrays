function sorting(arr){
    arr.sort( function (a, b){return a - b});

    let newArr = [];
    let half = arr.length/2;

    

    for (let i = 0; i < half; i++){
        newArr.push(arr[i]);
        let k = (arr.length - 1) - i;
        newArr.push(arr[k]);
    }

    return newArr;
}

sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])