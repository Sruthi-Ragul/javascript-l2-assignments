var findLargest = (arr, n) => {
    var newArr = [arr[0]];
    for (var index = 1; index < arr.length; index++) {
        var element = arr[index];
        if (element > newArr[index - 1]) {
            newArr.push(element);
        } else {
            var insertPos = 0;
            if (newArr[0] < element && element < newArr[index - 1]) {
                for (let j = 0; j < newArr.length; j++) {
                    if (newArr[j] > element) {
                        insertPos = j;
                    }
                }
            }
            //insert at specified pos
            newArr.splice(insertPos, 0, element);
        }
    }
    return newArr[n];
}

console.log(findLargest([43, 56, 23, 89, 88, 90, 99, 652], 4));
