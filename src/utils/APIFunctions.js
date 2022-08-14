export default async function fetchUserData(ressource, userId, setDataState) {
    
    const userUrl = "http://localhost:3000/user/" + userId + "/" + ressource;
    
    try {
      const response = await fetch(userUrl);
      const { data } = await response.json();
      setDataState(data);
    } catch (error) {
      console.log(error);
    }
  }