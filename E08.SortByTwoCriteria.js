function sort(arr){
    arr.sort(function (a, b){
        if(a.length !== b.length){
            return a.length - b.length;
        } else {
            return a - b;
        }
    })

    console.log(arr.join('\n'));
}

sort(['alpha', 'beta', 'gamma', 'omega', 'ast'])