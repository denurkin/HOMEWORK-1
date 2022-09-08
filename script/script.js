const title = prompt('Как называется ваш проект?'),
      screens = prompt('Какие типы экранов нужно разработать?',"Простые, Сложные, Интерактивные"),
      screenPrice = +prompt('Сколько будет стоить данная работа?', '12000'),
      adaptive = confirm('Нужен ли адаптив на сайте?'),
      rollback = 1,
      service1 = prompt('Какой дополнительный тип услуги нужен?'), 
      servicePrice1 = +prompt('Сколько это будет стоить?'), 
      service2 = prompt('Какой дополнительный тип услуги нужен?'),
      servicePrice2 = +prompt('Сколько это будет стоить?'),
      getAllServicePrices = (arg1, arg2) => {
        return arg1 + arg2;
      },
      allServicePrices = getAllServicePrices(servicePrice1, servicePrice2),
      fullPrice = getFullPrice(screenPrice, allServicePrices),
      getServicePercentPrices = (arg1, arg2) => {
        Math.ceil(arg1 - arg1 * (arg2/100))
      },
      servicePercentPrice = getServicePercentPrices(fullPrice, rollback),
      showTypeOf = (variable) => {
        console.log(variable, typeof variable);
      },
      getRollbackMessage = (price) => {
        switch(true){
            case price >= 30000:
                return 'Даем скидку в 10%';
            case price >= 15000:
                return 'Даем скидку в 5%';
            case price >= 0:
                return 'Скидка не предусмотрена';    
            default:
                return 'Что то пошло не так';
          };
      },
      getTitle = (arg) => {
        arg = arg.trim(); 
        arg = arg[0].toUpperCase() + arg.substring(1);
        return arg;
      };

      function getFullPrice(arg1, arg2) {
      return arg1 + arg2;
      }

      showTypeOf(title)
      showTypeOf(adaptive)
      showTypeOf(fullPrice)      

      console.log(getRollbackMessage(fullPrice));
      console.log(getServicePercentPrices);
      console.log(screens.toLocaleLowerCase().split());
