export default function formattedPerformanceData(data) {

    const kind_fr = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité",
      }


    return data.data?.map((row) => {
      return { value: row.value, kind: kind_fr[row.kind] };
    });
}


