export default function indicatorCardData(key, value) {
    switch (key) {
        case "calorieCount":
            return {value: value, unit: "kCal", nameFr:"Calories"}
        case "proteinCount":
            return {value: value, unit: "g", nameFr:"Protéines"}
        case "carbohydrateCount":
            return {value: value, unit: "g", nameFr:"Glucides"}
        case "lipidCount":
            return {value: value, unit: "g", nameFr:"Lipides"}
        default:
            return {value: 0, unit: "", nameFr:"unknown"}
    }
}