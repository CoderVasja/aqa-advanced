// Function to get todo
const getTodo = () => 
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error while fetching todo");
        }
        return response.json();
      })
      .catch(error => {
        console.error("Error in getTodo:", error);
      });
  
 
  const getUser = () => 
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error while fetching user");
        }
        return response.json();
      })
      .catch(error => {
        console.error("Error in getUser:", error);
      });
  

  Promise.all([getTodo(), getUser()])
    .then(results => {
      console.log("Promise.all results:", results); 
    })
    .catch(error => {
      console.error("Error in Promise.all:", error);
    });
  
  // Using Promise.race
  Promise.race([getTodo(), getUser()])
    .then(result => {
      console.log("Promise.race result:", result); 
    })
    .catch(error => {
      console.error("Error in Promise.race:", error);
    });
  