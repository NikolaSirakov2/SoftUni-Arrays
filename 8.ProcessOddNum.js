function processOddNum(arr){
    let newArr = [];

    for(let i = 1; i < arr.length; i += 2){
        let num = arr[i]*2;
        newArr.push(num);
    }

    return newArr.reverse().join(' ');
}

processOddNum([3, 0, 10, 4, 7, 3])