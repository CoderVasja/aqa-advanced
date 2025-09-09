
const getTodo = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (!response.ok) {
        throw new Error("Error while fetching todo");
      }
      return await response.json();
    } catch (error) {
      console.error("Error in getTodo:", error);
    }
  };
  

  const getUser = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      if (!response.ok) {
        throw new Error("Error while fetching user");
      }
      return await response.json();
    } catch (error) {
      console.error("Error in getUser:", error);
    }
  };
  
  
  const runAll = async () => {
    try {
      const results = await Promise.all([getTodo(), getUser()]);
      console.log("Promise.all results:", results); 
    } catch (error) {
      console.error("Error in Promise.all:", error);
    }
  };
  
  
  const runRace = async () => {
    try {
      const result = await Promise.race([getTodo(), getUser()]);
      console.log("Promise.race result:", result); 
    } catch (error) {
      console.error("Error in Promise.race:", error);
    }
  };
  

  runAll();
  runRace();
  