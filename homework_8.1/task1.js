const checkArray = (numbers) => {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        positiveCount++;
      } else if (numbers[i] === 0) {
        zeroCount++;
      } else {
        negativeCount++;
      }
    }
  
    console.log(`Positive numbers: ${positiveCount}`);
    console.log(`Negative numbers: ${negativeCount}`);
    console.log(`Zero numbers: ${zeroCount}`);
  };
  
  checkArray([2, -5, 0, 7, -3, 0, 10, -8]);
  