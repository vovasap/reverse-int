module.exports = function reverse (n) {
    return +(n>0?n:n*(-1)).toString().split('').reverse().join('')
}
