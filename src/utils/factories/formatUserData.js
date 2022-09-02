/**
 * Format the user data returned by the sportsee API for proper use in the application components
 * @param {Object} data Data returned by the API
 */
 export default function formatUserData(data) {

  return ({ 
    id: data.id,
    userInfos: data.userInfos,
    score: data.todayScore ? data.todayScore : data.score,  // handle score being stored either under todayScore or score property
    keyData: data.keyData
  })
}
