const mixArray = (firstArray, SecondArray) =>{
    let mixedArray = []
    return mixedArray = [...firstArray, ...SecondArray];
}

console.log(mixArray([1,2],[3,4]))