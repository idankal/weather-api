// return random rgb color
const buildRGB = () => {
  let rgb1 = Math.floor(Math.random() * 256),
      rgb2 = Math.floor(Math.random() * 256),
      rgb3 = Math.floor(Math.random() * 256)
  return `rgb(${rgb1},${rgb2},${rgb3})`
}

// return averager of temperature
const avg = (arr) => {
  let sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return Math.floor(sum / arr.length)
}

// return converting F to C
const convertFerToCel = (fer) => Math.floor((fer - 32) * (5 / 9))
const convertCelToFer = (cel) => Math.floor((cel + 32) * (5 / 9))

const handleTemperature = temperature => {
  let elem = document.getElementById('temperature'),unicode
  console.log(elem.classList);
  if(elem.classList.value == 'F') {
    unicode = '&#8451;'
    elem.classList.remove('F')
    temperature = convertFerToCel(temperature)
  } else if(elem.classList.value == '') {
    unicode = '&#8457;'
    elem.classList.add('F')
    temperature = convertCelToFer(temperature)
  }
  return elem.innerHTML = `${temperature} ${unicode}`
}

export {
  buildRGB,
  avg,
  buildTwoDays,
  buildWeekColums,
  convertFerToCel,
  convertCelToFer,
  handleTemperature
}
