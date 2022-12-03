function evenPosition(arr){
    let results = '';

    for (el = 0; el < arr.length; el+=2){
        results += arr[el];
        results += ' ';
    }

    console.log(results);
}

evenPosition(['20', '30', '40', '50', '60'])