const { formatElapsedTime } = require('../../helpers/formatElapsedTime')

test('it returns correct value when input is not a number', () => {
  expect(formatElapsedTime(NaN)).toBe('00:00.00')
  expect(formatElapsedTime('Hello World')).toBe('00:00.00')
})

test('it returns correct hundredths of seconds', () => {
  expect(formatElapsedTime(910)).toBe('00:00.91')
  expect(formatElapsedTime(40)).toBe('00:00.04')
})

test('it returns correct seconds ', () => {
  expect(formatElapsedTime(5910)).toBe('00:05.91')
  expect(formatElapsedTime(59100)).toBe('00:59.10')
  expect(formatElapsedTime(10040)).toBe('00:10.04')
})

test('it returns correct minutes ', () => {
  expect(formatElapsedTime(60000)).toBe('01:00.00')
  expect(formatElapsedTime(60000 * 15)).toBe('15:00.00')
})

test('it returns correct minutes , seconds, and hundredths of seconds', () => {
  expect(formatElapsedTime(60000 * 15 + 59000)).toBe('15:59.00')
  expect(formatElapsedTime(60000 * 15 + 59010)).toBe('15:59.01')
  expect(formatElapsedTime(60000 * 39 + 99210)).toBe('40:39.21')
})

test('it returns correct hours', () => {
  expect(formatElapsedTime(60000 * 120)).toBe('02:00:00.00')
  expect(formatElapsedTime(60000 * 180)).toBe('03:00:00.00')
  expect(formatElapsedTime(60000 * 1200)).toBe('20:00:00.00')
})

test('it returns correct hours, minutes and seconds', () => {
  expect(formatElapsedTime(60000 * 180 + 7000000)).toBe('04:56:40.00')
  expect(formatElapsedTime(600000 * 180 + 7001123)).toBe('31:56:41.12')
})
