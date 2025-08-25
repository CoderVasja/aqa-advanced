const divide = (numerator, denominator) =>{
    
    if(typeof numerator !== 'number' || typeof denominator != 'number'){
        throw new Error ('Both arguments should be number')
    }
    if(denominator == 0){
        throw new Error ('denominator should be > 0')
    }
    return numerator/denominator;
}


try {
    const result1 = divide(10, 2);
    console.log(result1);
  } catch (error) {
    console.log("Помилка:", error.message);
  } finally {
    console.log("Робота завершена");
  }
  

  try {
    const result2 = divide(10, 0);
    console.log(result2);
  } catch (error) {
    console.log("Помилка:", error.message);
  } finally {
    console.log("Робота завершена");
  }
  

  try {
    const result3 = divide(10, "a");
    console.log(result3);
  } catch (error) {
    console.log("Помилка:", error.message);
  } finally {
    console.log("Робота завершена");
  }
  
  