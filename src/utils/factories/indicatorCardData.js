export default function indicatorCardData(key, value) {
    switch (key) {
        case "calorieCount":
            return {value: value, unit: "kCal", nameFr:"Calories"}
            break;
        case "proteinCount":
            return {value: value, unit: "g", nameFr:"Protéines"}
            break;
        case "carbohydrateCount":
            return {value: value, unit: "g", nameFr:"Glucides"}
            break;
        case "lipidCount":
            return {value: value, unit: "g", nameFr:"Lipides"}
            break;
    
        default:
            return {value: 0, unit: "", nameFr:"unknown"}
            break;
    }
}