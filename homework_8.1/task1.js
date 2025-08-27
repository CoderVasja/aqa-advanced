const checkArray = (numbers) =>{
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    for(let i = 0; i < numbers.length; i++){
        numbers[i] > 0 ? positiveCount++ :  0;
        numbers[i] === 0 ? zeroCount++ :  0;
        numbers[i] < 0 ? negativeCount++ : 0;
    }
    console.log(`Positive numbers: ${positiveCount}`);
    console.log(`Negative numbers: ${negativeCount}`);
    console.log(`Zero numbers: ${zeroCount}`);
}

checkArray([2, -5, 0, 7, -3, 0, 10, -8])