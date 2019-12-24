function monkeyCount(n) {
    let arr = [];
    for (i = 0; i < n; i++) {
        arr.push(i + 1);
    }
    return arr;

    // for (var i = 0, arr = []; i < n; arr.push(++i));
    // return arr;
}
console.log(JSON.stringify(monkeyCount(10)));