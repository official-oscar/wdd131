document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

const temperature = 8; // °C
const windSpeed = 10; // km/h

document.getElementById("temp").textContent = temperature;
document.getElementById("wind").textContent = windSpeed;

function calculateWindChill(temp, wind) {
  // Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

let windChillResult = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChillResult = calculateWindChill(temperature, windSpeed) + " °C";
}

document.getElementById("windchill").textContent = windChillResult;