/**
 * Format the performance activity data returned by the sportsee API for use in the PerformanceRadarChart component
 * @param {Object} data Data returned by the API, object containing a data array of objects with value and kind properties
 * @returns {Array} Array of objects that can be used by the performance radar chart component
 */
export default function formattedPerformanceData(data) {
  const kind_fr = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  return data.data?.map((row) => {
    return { value: row.value, kind: kind_fr[row.kind] };
  });
}
