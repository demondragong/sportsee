/**
 * Fetch data from the sportsee API (running locally for development) and use it to set the relevant state
 * 
 * @async
 * @param { String } ressource used to build the API endpoint to fetch data, like so http://localhost:3000/user/userId/ressource
 * @param { String } userId used to build the API endpoint to fetch data, like so http://localhost:3000/user/userId/ressource
 * @param { Function } setDataState sate setting function of the state that should be updated
 */

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