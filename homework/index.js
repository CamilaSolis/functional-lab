exports.factorial = (n) => {
    if (n < 0) {
        return -1
    } else if (n == 0) {
        return 1
    } else {
        return (n * factorial(n-1))
    }
}

exports.fibonacci = (n) => {
    if (n <= 1) {
        return 1
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

exports.divide = (a, b) => {
    if(b > a){
        return 0
    } else {
        return divide(a-b , b) + 1
    }
}

exports.invert = (n) => {
    if (n < 10) {
        return n
    } else {
        return (n%10) + invert(n/10) * 10
    }
}

exports.suma = (n) => {
    if (n == 0) {
        return n
    } else {
        return suma (n/10) + (n%10)
    }
}

exports.multi = (a, b) => {
    if (a == 1) {
        return (b)
    }
    if (a%2 != 0) {
        return (b + multi (a/2 , b*2))
    } else {
        return (multi (a/2 , b*2))
    }
}

exports.sumArr = (arr) => {
}
