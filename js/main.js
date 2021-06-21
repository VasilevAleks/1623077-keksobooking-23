let randomInteger = function (min,max) {
  if (max < min) {
   return console.log('Максимальное число не может быть меньше минимального');
  }
  if (max === min) {
    console.log('Вариантов нет');
  }
  if (min<=0 || max<=0) {
     return console.log('Числа должны быть только пложительными');
  }
 let integerNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return console.log('число = '+ integerNumber);

}
randomInteger (1,100);

let randomFractional = function (min,max,dec){
  if (max < min) {
    return console.log('Максимальное число не может быть меньше минимального');
   }
   if (max === min) {
     console.log('Вариантов нет');
   }
   if (min<=0 || max<=0) {
      return console.log('Числа должны быть только пложительными');
   }
  let fractionalNumber = Math.random() * (max - min + 1) + min;
   return console.log('число = '+ fractionalNumber.toFixed(dec));
}
randomFractional(1,100,5)
