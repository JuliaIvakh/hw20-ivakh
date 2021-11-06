const array = [1, 2, 3, 4, 5, 2];
const array2 = ["Nastya", "Julia", "Kate", "Dima", "Maks"];
//indexOf
function indexOf(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf(array, 1));

//lastIndexOf
function lastIndexOf(arr, value, fromIndex = null) {
  fromIndex === null ? (fromIndex = arr.length - 1) : null;
  for (let i = fromIndex; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf(array, 2));

//find
function find(arr, value) {
  for (let i of arr) {
    if (i === value) return value;
  }
  return undefined;
}

console.log(find(array2, "Dima"));

//findIndex
function findIndex(arr, value) {
  for (let i of arr) {
    if (i === value)
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
          return i;
        }
      }
  }
  return undefined;
}

console.log(findIndex(array2, "Julia"));

//includes
function includes(arr, value) {
  for (let i of arr) {
    if (i === value) return true;
  }
  return false;
}
console.log(includes(array, 2));

//every
function isBigEnough(element, index, array) {
  return element >= 1;
}

function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) return false;
  }
  return true;
}
console.log(every(array, isBigEnough));

//some
function isSmallEnough(element, index, array) {
  return element <= 2;
}

function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) return true;
  }
  return false;
}
console.log(some(array, isSmallEnough));
