// const  title,
//     screens,
//     screenPrice,
//     rollback,
//     fullPrice,
//     adaprive;

// alert('привет');
// console.log('привет');

// 2 урок

// const title = 'HOMEWORK',
//       screens = "Простые, Сложные, Интерактивные",
//       screenPrice = 100,
//       rollback = 1,
//       fullPrice = 200000,
//       adaptive = true;

// console.log(typeof(title));
// console.log(typeof(adaptive));
// console.log(typeof(fullPrice));
// console.log(String(screenPrice).length);
// console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани” и “Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
// console.log(screens.toLocaleLowerCase().split());
// console.log(fullPrice * (rollback/100));

// 3 урок

const title = prompt('Как называется ваш проект?'),
      screens = prompt('Какие типы экранов нужно разработать?',"Простые, Сложные, Интерактивные"),
      screenPrice = +svdsdvprompt('Сколько будет стоить данная работа?', '12000'),
      adaptive = confirm('Нужен ли адаптив на сайте?'),
      service1 = prompt('Какой дополнительный тип услуги нужен?'), 
      servicePrice1 = +prompt('Сколько это будет стоить?'), 
      service2 = prompt('Какой дополнительный тип услуги нужен?'),
      servicePrice2 = +prompt('Сколько это будет стоить?'),
      fullPrice = screenPrice + servicePrice1 + servicePrice2,
      servicePercentPrice = fullPrice - 1000;

      console.log(Math.ceil(servicePercentPrice));

      if (fullPrice >= 30000) {
        console.log('Даем скидку в 10%');
      } else if (fullPrice >= 15000 && fullPrice < 30000) {
        console.log('Даем скидку в 5%');
      } else if (fullPrice >= 0 && fullPrice < 15000) {
        console.log('Скидка не предусмотрена');
      } else if (fullPrice < 0) {
        console.log('Что то пошло не так');
      };








