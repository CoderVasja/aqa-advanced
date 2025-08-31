const sortArray = (numbers) =>{
    console.log(numbers);
    let sortedArray = [...numbers].sort((a, b) => a - b);
    console.log(sortedArray)
}
sortArray([1,3,11,8,10,2,0])