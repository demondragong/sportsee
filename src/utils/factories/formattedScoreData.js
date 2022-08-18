/**
 * Format the user data returned by the sportsee API for use in the ScoreRadialBarChart component
 */
export default function formattedScoreData(data) {
  
  // deal with score being stored either under todayScore or score property
  const score = data.todayScore ? data.todayScore : data.score
  
  const array = [
    {
      score: score,
      fill: "#FF0000",
    },
  ];

  return array;
}
