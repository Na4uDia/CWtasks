function points(games) {
    var suma = 0;
    games.forEach(element => {
        let score = element.split(":");
        if (+score[0] > +score[1]) {
            suma += 3;
        } else {
            if (+score[0] == +score[1]) {
                suma += 1;
            }
        }
    });
    return suma;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]));
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]));