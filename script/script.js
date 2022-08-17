const title = prompt('Как называется ваш проект?'),
      screens = prompt('Какие типы экранов нужно разработать?',"Простые, Сложные, Интерактивные"),
      screenPrice = +prompt('Сколько будет стоить данная работа?', '12000'),
      adaptive = confirm('Нужен ли адаптив на сайте?'),
      rollback = 1,
      service1 = prompt('Какой дополнительный тип услуги нужен?'), 
      servicePrice1 = +prompt('Сколько это будет стоить?'), 
      service2 = prompt('Какой дополнительный тип услуги нужен?'),
      servicePrice2 = +prompt('Сколько это будет стоить?'),
      fullPrice = screenPrice + servicePrice1 + servicePrice2,
      servicePercentPrice = fullPrice - fullPrice * (rollback/100);

      console.log(fullPrice);
      console.log(Math.ceil(servicePercentPrice));

      switch(true){
        case fullPrice >= 30000:
            console.log('Даем скидку в 10%');
            break;
     
        case fullPrice >= 15000:
            console.log('Даем скидку в 5%');
            break;
     
        case fullPrice >= 0:
            console.log('Скидка не предусмотрена');
            break;

        case fullPrice < 0:
            console.log('Что то пошло не так');
            break;
      }


      console.log(typeof(title));
      console.log(typeof(adaptive));
      console.log(typeof(fullPrice));
      console.log(String(screenPrice).length);
      console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани” и “Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
      console.log(screens.toLocaleLowerCase().split());
      console.log(fullPrice * (rollback/100));








