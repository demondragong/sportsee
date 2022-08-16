import caloriesIcon from '../static/indicator-cards-icons/calories-icon.svg'
import carbsIcon from '../static/indicator-cards-icons/carbs-icon.svg'
import fatIcon from '../static/indicator-cards-icons/fat-icon.svg'
import proteinIcon from '../static/indicator-cards-icons/protein-icon.svg'

export default function IndicatorCard({data}) {
    
    let src = carbsIcon;
    switch (data.nameFr) {
        case "Calories":
            src = caloriesIcon;
            break;
        case "Protéines":
            src = proteinIcon;
            break;
        case "Glucides":
            src = carbsIcon;
            break;
        case "Lipides":
            src = fatIcon;
            break;
        default:
            src = fatIcon;
            break;
    }

    
    return (
        <div className="indicator-card card">
            <img src={src} alt="" />
            <div>
                <div>{data.value}{data.unit}</div>
                <div>{data.nameFr}</div>
            </div>  
        </div>
    )
}