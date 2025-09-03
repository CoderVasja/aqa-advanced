let car1 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2018
  };
  
  let car2 = {
    brand: "BMW",
    model: "X5",
    owner: "Ivan Petrenko"
  };

  let car3 = {...car1, ...car2}

  console.log(car3)