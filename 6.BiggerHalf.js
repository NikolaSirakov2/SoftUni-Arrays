function biggerHalf(arr){
    let k = Math.floor(Number(arr.length/2));

    arr.sort(function (a, b){return a - b})

    // let newArr = [];

    // for (let i = k; i < arr.length; i++){
    //     newArr.push(arr[i])
    // }

    // return newArr;

    console.log(arr.slice(1, 4));
}

biggerHalf([3, 19, 14, 7, 2, 19, 6])