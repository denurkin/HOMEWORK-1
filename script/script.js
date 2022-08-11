// let title,
//     screens,
//     screenPrice,
//     rollback,
//     fullPrice,
//     adaprive;

// alert('привет');
// console.log('привет');

const title = 'HOMEWORK',
      screens = "Простые, Сложные, Интерактивные",
      screenPrice = 100,
      rollback = 1,
      fullPrice = 200000,
      adaptive = true;

console.log(typeof(title));
console.log(typeof(adaptive));
console.log(typeof(fullPrice));
console.log(String(screenPrice).length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани” и “Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log(screens.toLocaleLowerCase().split());
console.log(fullPrice * (rollback/100));
