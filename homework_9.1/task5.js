let users = [
    {
      name: "Ivan Petrenko",
      email: "ivan.petrenko@example.com",
      age: 25
    },
    {
      name: "Olena Shevchenko",
      email: "olena.shevchenko@example.com",
      age: 30
    },
    {
      name: "Andriy Kovalenko",
      email: "andriy.kovalenko@example.com",
      age: 22
    },
    {
      name: "Sofia Bondarenko",
      email: "sofia.bondarenko@example.com",
      age: 28
    }
  ];
  
for (let [index,user] of users.entries()){
    console.log(`User №${index}`)
    console.log(`${user.name}//${user.age}//${user.email}`)
}
  