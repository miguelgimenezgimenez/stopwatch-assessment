function formatElapsedTime (elapsedMilliseconds) {
  if (!Number.isInteger(elapsedMilliseconds)) return '00:00.00'
  let hundredthsOfSeconds = Math.floor(elapsedMilliseconds / 10)
  let seconds = Math.floor(elapsedMilliseconds / 1000)
  let minutes
  let hours

  if (seconds >= 60) {
    [minutes, seconds] = parseTime(seconds)
  }

  if (minutes >= 60) {
    [hours, minutes] = parseTime(minutes)
  }

  hundredthsOfSeconds = String(hundredthsOfSeconds).slice(-2).padStart(2, 0)
  seconds = String(seconds).padStart(2, 0)
  minutes = String(minutes || 0).padStart(2, 0)

  if (hours) {
    hours = String(hours).padStart(2, 0)
    return `${hours}:${minutes}:${seconds}.${hundredthsOfSeconds}`
  }
  return `${minutes}:${seconds}.${hundredthsOfSeconds}`
}

function parseTime (value) {
  const divBy60 = Math.floor(value / 60)
  const rest = value % 60
  return [divBy60, rest]
}

export { formatElapsedTime }
