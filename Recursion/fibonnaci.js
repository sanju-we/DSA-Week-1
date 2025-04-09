function fibonacci(n) {
  if(n < 0){ 
    return 'Invalid entry'
  }else if(n <= 1){ 
    return n 
  } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(7))