const findEvenNumbers = (numbers) =>{
    let evenNumbers = [];

    for(let i = 0; i < numbers.length; i++){
        numbers[i] % 2 == 0 ? evenNumbers.push(numbers[i]) : 0;
    }
    
    console.log(evenNumbers)
}

findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])