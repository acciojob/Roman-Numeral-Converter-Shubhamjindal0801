function convertToRoman(num) {
  	
	const obj = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  //your code here
	let romanNumeral = '';
  for (let i = 0; i < obj.length; i++) {
    while (num >= obj[i].value) {
      romanNumeral += obj[i].symbol;
      num -= obj[i].value;
    }
  }
  return romanNumeral;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));
console.log(convertToRoman(14))




// do not edit below this line
module.exports = convertToRoman
