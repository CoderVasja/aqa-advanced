const recurseFun = (num) =>{
 console.log(num)
 return num > 0 ? recurseFun(num-1) : undefined;
}

recurseFun(5);