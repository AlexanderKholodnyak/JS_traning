function checkForSpam(str) {
  // Write code under this line
  const sale = 'sale';
  const spam = 'spam';
  const lowerCase = str.toLowerCase();
  let result = false;

  if (lowerCase.includes(sale) || lowerCase.includes(spam)) {
    result = true;
  }
  return result;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
