
function bubbleSort(arr) {

  let swaps = 0;

  do {
    // Iterate through the array
    swaps = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i+1], arr[i]] = [arr[i], arr[i+1]];
        swaps++;
        console.log(arr.join(","));
      }
    }
  } while (swaps > 0);

  return arr;
}

module.exports = bubbleSort;
