import { convertFerToCel, convertCelToFer, handleTemperature } from './weather/functions.js'
import {
  createChart,
  buildDataSet,
  arrayOf2,
  hoursChartParser,
  dailyChartParser,
  buildTwoDays,
  buildTodayAndTomorrow
} from './weather/chartBuilder.js'
import '../css/style.css'

window.onload = () => {

  const proxy = 'https://cors-anywhere.herokuapp.com/',
        api = `${proxy}https://api.darksky.net/forecast/bf24faeb61b1b888ec45ae372d9009b4/`

  const showPosition = position => {
    let lat = position.coords.latitude,
        long = position.coords.longitude

    Request('GET', `${api}${lat},${long}` , res => {
      res = JSON.parse(res)
      console.log(res)
    })
  }

  const showError = error => {
    Request('GET', 'https://api.ipify.org?format=json', false, res => {
      // if(!res) return console.log(res)
      res = JSON.parse(res)
      Request('GET',`http://ip-api.com/json/${res.ip}`, false, resp => {
        // if(!res) return console.og(resp)
        resp = JSON.parse(resp)
        Request('GET', `${api}${resp.lat},${resp.lon}`, false, response => {
          // if(!res) return console.log(response)
          response = JSON.parse(response)
          setEvents(response.currently.temperature)
          setTimeZone(response.timezone)
          setSummary(response.currently.summary)
          setTemperature(convertFerToCel(response.currently.temperature))
          setIcon(response.currently.icon, document.getElementById('icon'))
          // createChart(dailyChartParser(response.daily.data), ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
          // createChart(hoursChartParser(response.hourly.data), buildHourColums(response.hourly.data.length))
          createChart(
            [ buildDataSet(arrayOf2(hoursChartParser(response.hourly.data))),
              buildDataSet(dailyChartParser(response.daily.data).splice(0,2))
            ],
            // buildHourColums(response.hourly.data.length)
            // buildWeekColums()
            buildTodayAndTomorrow()
          )

        })
      })
    })
  }

  const Request = (method, url, payload, cb) => {
    if (method !== 'GET' && !payload) return cb(false)
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        cb(this.responseText)
      }
    }
    xhttp.open(method, url, true)
    xhttp.send()
  }

  const setEvents = temperature => {
    document.getElementById('btn').addEventListener("click", fetchSrc)
    document.getElementById('temperature').addEventListener("click", () => handleTemperature(temperature))
  }

  const setTimeZone = timezone => document.getElementById('timezone').innerHTML = timezone
  const setTemperature = temperature => document.getElementById('temperature').innerHTML = `${temperature}&#8451;`
  const setSummary = text => document.getElementById('summary').innerHTML = text

  const setIcon = (icon,iconId) => {
    let skycons = new Skycons({color: "white"}),
        currentIcon = icon.replace(/-/g, '_').toUpperCase()
    skycons.play()
    return skycons.set(iconId, Skycons[currentIcon])
  }

  const fetchSrc = () => {
    Request('GET','http://localhost:4000/api/get-song', false, res => {
      let blobUrl = URL.createObjectURL(new Blob([res])),
          audio = document.getElementById('audio'),
          source = document.getElementById('source')

      // audio.src = blobUrl
      source.src = blobUrl
      audio.play()
    })
  }

  (function() {
    setEvents()
    // if(window.location.pathname === '/music') {
    //   import './music/musicApi.js'
    // }
    // navigator.geolocation.getCurrentPosition(showPosition,showError)
  })()

}
