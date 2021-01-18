function transponer(x) {
    return Object.keys(x[0]).map(function(c) {
        return x.map(function(r) { return r[c]; });
    });
}

console.log(transponer([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));