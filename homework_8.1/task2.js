const arrayMutation = (numbers) =>{
    console.log(`Old array ${numbers}`);
    let newArray = numbers.map(function(elem,index){
        return elem*index;
    })
    console.log(`New array ${newArray}`);
}

arrayMutation([1, 2, 3, 4, 5]);
