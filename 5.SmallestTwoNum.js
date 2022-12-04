function smallestTwo(arr){
    arr.sort(function(a,b){return a - b});

    let newArr = [arr[0],arr[1]]

    console.log(newArr.join(' '));
}

smallestTwo([30, 15, 50, 5])

const fruit = ['banana', 'orange', 'apple', 'mango']

fruit.sort();

console.log(fruit);

fruit.reverse()

console.log(fruit);