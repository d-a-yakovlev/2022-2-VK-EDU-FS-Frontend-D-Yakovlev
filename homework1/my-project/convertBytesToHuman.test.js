/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman('1024')).toBe(false)
  expect(convertBytesToHuman(false)).toBe(false)
  expect(convertBytesToHuman(-1024)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1024**9)).toBe('1 BB')
  expect(convertBytesToHuman(1024**8)).toBe('1 YB')
  expect(convertBytesToHuman(1024**7)).toBe('1 ZB')
  expect(convertBytesToHuman(1024**6)).toBe('1 EB')
  expect(convertBytesToHuman(1024**5)).toBe('1 PB')
  expect(convertBytesToHuman(1024**4)).toBe('1 TB')
  expect(convertBytesToHuman(1024**3)).toBe('1 GB')
  expect(convertBytesToHuman(1024**2)).toBe('1 MB')
  expect(convertBytesToHuman(1024**1)).toBe('1 KB')
  expect(convertBytesToHuman(1024**0)).toBe('1 B')
});

test('Возвращает корректную дробную часть', () => {
  expect(convertBytesToHuman(1024+512)).toBe('1.5 KB')
  expect(convertBytesToHuman(1024+256)).toBe('1.25 KB')
  expect(convertBytesToHuman(2048-256)).toBe('1.75 KB')
  expect(convertBytesToHuman(1024+128)).toBe('1.13 KB') //ceil(1.125)
  expect(convertBytesToHuman(2048-128)).toBe('1.88 KB') //ceil(1.875)
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
});
