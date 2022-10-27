export function validateTime(time: string) {
  const splitTime = time.split(':')
  if (splitTime.length !== 2) {
    return false
  }
  const hour = Number(splitTime[0])
  const min = Number(splitTime[1])
  if (isNaN(hour) || isNaN(min)) {
    return false
  }
  if (hour > 23 || hour < 0) {
    return false
  }
  if (min > 59 || min < 0) {
    return false
  }
  return true
}
