function addAndRemove(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      let num = i + 1;
      newArr.push(num);
    } else if (arr[i] === "remove") {
      newArr.pop();
    }
  }

  if (newArr[0] === undefined) {
    return "Empty";
  } else {
    return newArr.join("\n");
  }
}

addAndRemove(["remove", "remove", "remove"]);
