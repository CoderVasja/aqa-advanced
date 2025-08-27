const arraySum = (numbers) =>{
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum)
}

arraySum([10, 20, 30, 40, 50])