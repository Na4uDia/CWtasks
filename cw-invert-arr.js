function invert(array) {
    for (i = 0; i < array.length; i++) {
        array[i] = 0 - array[i]
    }
    return array;
}

console.log(invert([1, -2, 3, -4, 5]))