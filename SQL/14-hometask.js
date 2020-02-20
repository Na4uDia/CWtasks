var string = 'Порахувати букву, яка найчастіше зустрічається в реченні',
    sums = {};

string.split('').map(function(e){
    e = e.toLowerCase(); 
    sums[e] = !sums[e] ? 1 : sums[e]+1;
});
//console.log(sums);

var max = [...Object.entries(sums)].reduce((a, e ) => e[1] > a[1] ? e : a);

console.log( `Max met char is "${max[0]}", it used ${max[1]} times.` );