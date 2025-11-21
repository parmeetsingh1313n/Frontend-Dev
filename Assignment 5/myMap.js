// Custom map implementation
Array.prototype.myMap = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

// test
console.log([1, 2, 3].myMap(n => n * 2));
