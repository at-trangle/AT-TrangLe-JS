### Playground
1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

	function sum (x, y) {
	  if (x === y) {
	    return 3 * (x + y);
	  }
	  return (x + y);
	 }
	console.log(sum(10, 5));
	console.log(sum(5, 5));

2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
	
	function absNum(x) {
	  const y = 19;
	  if (x > y) {
	    return 3 * (x - y);
	  }
	  return y - x;
	}
	console.log(absNum(12));
	console.log(absNum(19));
	console.log(absNum(22));

3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.

	function divideby3(x) {
	  let result = [];
	  let index = 0;
	  for(let i =0; i<10; i++){
	    let num = x.replace("*", i);
	    if(num%3 == 0){
		result[index] = num;
		  index++;
	      }
	  }
	  return result;
	}
	console.log(divideby3('1*9'));

4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.

	function divideby6(x) {
	  let result = [];
	  let index = 0;
	  for(let i =0; i<10; i++){
	    let num = x.replace("*", i);
	    if(num%6 == 0){
	      result[index] = num;
	      index++;
	    }
	  }
	  return result;
	}
	console.log(divideby6('1234567890*'));
