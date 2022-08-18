/**
 * Format the key indicators data (calories, proteins, etc) from the sportsee API for use in the IndicatorCard component
 * @param { String } key Key from the keyData object
 * @param { Number } value Corresponding value in the keyData object 
 */
export default function formattedIndicatorData(key, value) {
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