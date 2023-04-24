function convertToRoman(num) {
  	
	const obj = [
    { value: 1000, symbol: 'M' },
    { value: 500, symbol: 'D' },
    { value: 100, symbol: 'C' },
    { value: 50, symbol: 'L' },
    { value: 10, symbol: 'X' },
    { value: 5, symbol: 'V' },
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
//console.log(convertToRoman(14))




// do not edit below this line
module.exports = convertToRoman
