import {
  convertFerToCel,
  convertCelToFer,
  buildRGB,
  avg
} from './functions.js'

// builder for 1 graph
const buildDataSet = data => {
  let labelNum = Math.floor(Math.random() * 11)
  return {
    label: `My ${labelNum} Data Set`,
    backgroundColor: buildRGB(),
    borderColor: buildRGB(),
    data: data
  }
}

// creating new graph
const createChart = (dataSets, colums) => {
  let ctx = document.getElementById('myChart').getContext('2d'),
      chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: colums,
        datasets: dataSets
    },
    options: {}
  });
}

const arrayOf2 = arr => {
  let ret = []
  ret.push(avg(arr.splice(0,arr.length / 2)))
  ret.push(avg(arr.splice(arr.length / 2, arr.length)))
  return ret
}

// parsing daily list
const dailyChartParser = dailyList => {
  let dayGraph = dailyList.map(day => {
    return convertFerToCel(day.temperatureLow + day.temperatureLow / 2)
  })
  return dayGraph
}

// parsing hours list
const hoursChartParser = hoursList => {
  let hourGraph = hoursList.map(hour => {
      return convertFerToCel(hour.temperature)
  })
  return hourGraph
}

//
const buildHourColums = size => {
  let arr = []
  for (var i = 0; i < size; i++) {
    if (i < 9) {
      arr.push(`0${i}:00`)
    } else {
      arr.push(`${i}:00`)
    }
  }
  return arr
}

const buildTodayAndTomorrow = () => {
  let date = new Date().getDay(),
      day = buildWeekColums()

  return [day[date], day[date+1]]
}

// builder for display
const buildTwoDays = () => ["Sunday", "Monday"]
const buildWeekColums = () => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export {
  buildDataSet,
  createChart,
  arrayOf2,
  dailyChartParser,
  hoursChartParser,
  buildHourColums,
  buildTwoDays,
  buildWeekColums,
  buildTodayAndTomorrow
}
