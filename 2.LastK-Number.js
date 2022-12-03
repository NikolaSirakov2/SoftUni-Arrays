function lastKNumber(n, k){
    let arr = [1, 1, 2];

    for (i = 2; i < k; i++){
        let num = arr[i] + arr[i - 1] + arr[i - 2];
        console.log(num);
    }

    // console.log(arr);
}

lastKNumber(6, 3)