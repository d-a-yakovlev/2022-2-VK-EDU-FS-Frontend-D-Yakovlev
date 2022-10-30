/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default   function convertBytesToHuman(bytes) {
  if ( typeof bytes != 'number' && typeof bytes != 'bigint' ) return false;
  if ( bytes < 0 ) return false;

  let dimPrefixMap = {
    //stands for :
    1 : "K", //Kilobyte
    2 : "M", //Magabyte
    3 : "G", //Gigabyte
    4 : "T", //Terabyte
    5 : "P", //Petabyte
    6 : "E", //Exabyte
    7 : "Z", //Zettabyte
    8 : "Y", //Yottabyte
    9 : "B", //Brontobyte
  };

  let countK = 0;
  while ( bytes >= 1024) {
    bytes /= 1024
    countK++
  }

  let result = +(bytes.toFixed(2));
  let dim = countK > 0 ? `${dimPrefixMap[countK]}B`: `B`;
  
  return `${result} ${dim}`;
}

//console.log(convertBytesToHuman(1024))
//console.log(convertBytesToHuman(512))


