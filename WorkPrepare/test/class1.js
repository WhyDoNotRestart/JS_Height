//多维数组转以为数组

function flat(arr, R) {
    var R = R || []
    for (let i = 0; i < arr.length; i++) {
        // typeof
        if (Object.prototype.toString.call(arr[i]) == '[Object Array]') {
            flat(arr[i],R)
        } else {
            R.push(arr[i])
        }
    }
}
flat([1, [2, 3, 4, [5, 6], 7], 8])