const CelsiusEl = document.getElementById("Celsius")
const FahrenheitEl = document.getElementById("Fahrenheit")
const KelvinEl = document.getElementById("kelvin")


function computeTemp(event) {
    const currentvalue = +event.target.value

    switch (event.target.name) {
        case "Celsius":
            kelvinEl.value = (currentvalue + 273.32 ).toFixed(2);
            FahrenheitEl.value = (currentvalue * 1.8 + 32).toFixed(2);
            break;
            case "Fahrenheit":
                CelsiusEl.value = ((currentvalue - 32) / 1.8).toFixed(2);
                kelvinEl = ((currentvalue - 32) / 1.8 +273.32).toFixed(2);
                break;
                case "kelvin":
                    CelsiusEl.value = (currentvalue - 273.32).toFixed(2);
                    FahrenheitEl.value = ((currentvalue - 273.32) * 1.8 + 32).toFixed(2);
            break;
    
        default:
            break;
    }

}