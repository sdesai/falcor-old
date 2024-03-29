module.exports = function array_flat_map(array, selector) {
    var index = -1;
    var i = -1;
    var n = array.length;
    var array2 = new Array(n);
    while(++i < n) {
        var array3 = selector(array[i], i, array);
        var j = -1;
        var k = array3.length;
        while(++j < k) {
            array2[++index] = array3[j];
        }
    }
    return array2;
}