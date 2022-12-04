function pieceOfPie(arr, start, end){
    let st = arr.indexOf(start);
    let en = arr.indexOf(end);

    

    return arr.slice(st, en + 1);
}

pieceOfPie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie')