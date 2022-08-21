/**
 * Fetch data from the sportsee API (running locally for development) and use it to set the relevant state
 *
 * @async
 * @param { String } ressource used to build the API endpoint to fetch data, like so http://localhost:3000/user/userId/ressource
 * @param { String } userId used to build the API endpoint to fetch data, like so http://localhost:3000/user/userId/ressource
 * @param { Function } setDataState sate setting function of the state that should be updated
 */

import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../mockData";

export default async function fetchUserData(
  mock,
  ressource,
  userId,
  setDataState
) {
  if (mock) {
    switch (ressource) {
      case "activity":
        console.log(USER_ACTIVITY)
        setDataState(USER_ACTIVITY.find(x => x.userId === parseInt(userId)));
        break;
      case "average-sessions":
        setDataState(USER_AVERAGE_SESSIONS.find(x => x.userId === parseInt(userId)));
        break;
      case "performance":
        setDataState(USER_PERFORMANCE.find(x => x.userId === parseInt(userId)));
        break;
      default:
        setDataState(USER_MAIN_DATA.find(x => x.id === parseInt(userId)));
        break;
    }
  } else {
    const userUrl = "http://localhost:3000/user/" + userId + "/" + ressource;

    try {
      const response = await fetch(userUrl);
      const { data } = await response.json();
      setDataState(data);
    } catch (error) {
      console.log(error);
    }
  }
}
