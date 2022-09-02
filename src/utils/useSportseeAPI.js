import { useState, useEffect } from "react";
import axios from "axios";
import apiBaseUrl from "./constants";
import { getMockData } from "./mockData";
import formatPerformanceData from "./factories/formatPerformanceData";
import formatActivityData from "./factories/formatActivityData";
import formatAverageSessionData from "./factories/formatAverageSessionData";
import formatUserData from "./factories/formatUserData";

axios.defaults.baseURL = apiBaseUrl;

/**
 * Format results from the API for use in the appliaction based on the ressource targeted
 *
 * @param { Object } result JSON data received from the API
 * @param { String } ressource API ressource, used to know which formatting to apply
 */
const formatResult = (result, ressource) => {
  switch (ressource) {
    case "":
      return formatUserData(result);
    case "activity":
      return formatActivityData(result);
    case "average-sessions":
      return formatAverageSessionData(result);
    case "performance":
      return formatPerformanceData(result);
    default:
      return result;
  }
};

/**
 * Fetch data from the sportsee API (running locally for development) and return it formatted
 *
 * @param { String } userId used to build the API endpoint to fetch data, like so http://localhost:3000/user/userId/ressource
 * @param { String } ressource used to build the API endpoint to fetch data, like so http://localhost:3000/user/userId/ressource
 */
export const useSportseeAPI = (userId, ressource) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const url = userId + "/" + ressource;

  const fetchData = async (url) => {
    try {
    //   const result = getMockData(userId, ressource); // get data from mockData
      const {
        data: { data: result },
      } = await axios.get(url); // get data from API
      const formattedResult = formatResult(result, ressource);
      setResponse(formattedResult);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []); // execute on first render only

  return { response, loading, error };
};
