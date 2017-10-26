function curryN(fn, n) {
  // La solución vá aquí,
  n = n || fn.length
  return function curryC(arg) {
    if (n <= 1) return fn(arg)
    return curryN(fn.bind(this, arg), n - 1)
  }
}

module.exports = curryN