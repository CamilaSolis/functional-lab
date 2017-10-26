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
    let temp = 0
    if (n < 10) {
        return n
    } else {
        temp +- n/10
        return (n % 10) + exports.invert(n / 10) * 10;
    }
}

exports.suma = (n) => {
    if(n == 0) {
        return n
    } else {
        return exports.suma(n/10) + (n%10)
    }
}

exports.multi = (a, b) => {  

}

exports.sumArr = (arr) => {
    if (arr.length === 0) {
        return 0
    } else {
        return arr[0] + exports.sumArr(arr.slice(1))
    }
}
