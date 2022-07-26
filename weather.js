//Complete the Weather API Backend part using openweathermap api
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December",]

document.querySelector(".search-box").addEventListener("input", async (userinput) => {
    const today = new Date()
    const location = userinput.target.value
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=218ed714209d05f9c900d5d68bee3bee&units=metric`
    try {
      const response = await fetch(link)
      const data = await response.json()
      console.log(data)
      document.querySelector(".city").innerHTML = `${data.name} , ${data.sys.country}`
      document.querySelector(".date").innerHTML = `${days[today.getDay()]} ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`
      document.querySelector(".temp").innerHTML = `${data.main.temp}°c`
      document.querySelector(".weather").innerHTML = data.weather[0].main
      document.querySelector(".hi-low").innerHTML =`${data.main.temp_min}°c / ${data.main.temp_max}°c`
    } catch (err) {
      console.log(err.message)
    }
})