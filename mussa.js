
function change(inputArr) {
  let temp = [];

  const permute = (arr, a = []) => {
    if (arr.length === 0) {
      temp.push(a);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), a.concat(next));
      }
    }
  };

  permute(inputArr);

  return temp;
}

console.log(change([1, 2, 3]));
