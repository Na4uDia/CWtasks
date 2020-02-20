function findUniq(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) {
            return arr[i];
        }
    }
}

// треба - мапа заповнюється по кількості зустрічання, мапа перевіряється де є 1

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));