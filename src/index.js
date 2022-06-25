module.exports = function reverse(n) {
    let moduleN = Math.abs(n)
    let toStringN = String(moduleN);
    let reversedN = toStringN.split('').reverse().join('');
    return reversedN;
}
