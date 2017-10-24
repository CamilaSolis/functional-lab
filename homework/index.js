exports.factorial = (n) => {
    if (n < 0) {
        return -1
    } else if (n == 0) {
        return 1
    } else {
        return (n * exports.factorial(n-1))
    }
}

exports.fibonacci = (n) => {
    if (n <= 1) {
        return 1
    } else {
        return exports.fibonacci(n-1) + exports.fibonacci(n-2)
    }
}

exports.divide = (a, b) => {
    if(b > a){
        return 0
    } else {
        return exports.divide(a-b , b) + 1
    }
}

exports.invert = (n) => {
    if (n < 10) {
        return n
    } else {
        return (n%10) , exports.invert(n/10)*10;
    }
}

exports.suma = (n) => {
    if (n == 0) {
        return n
    } else {
        return parseInt(exports.suma (n/10) + (n%10))
    }
}

exports.multi = (a, b) => {
    if (b == 1) {
        return (a)
    }
    if (b%2 != 0) {
        return (a + exports.multi (b/2 , a*2))
    } else {
        return (exports.multi (b/2 , a*2))
    }
}

exports.sumArr = (arr) => {
}
