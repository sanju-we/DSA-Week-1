function isPrime(n, i = 2) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % i === 0) return false;
  if (i > Math.sqrt(n)) return true;
  return isPrime(n, i + 1);
}


console.log(isPrime(4))