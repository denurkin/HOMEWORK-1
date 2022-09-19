const appData = {
      title: "",
      screens: "", 
      screenPrice: 0,
      adaptive: true,
      rollback: 10,
      service1: "",
      service2: '',
      allServicePrices: 0,
      fullPrice: 0,
      servicePercentPrice: 0,
      isNumber: function(num) {
        return !isNaN(parseFloat(num) && isFinite(num));
      },
      asking: function() {
        appData.title = prompt('Как называется ваш проект?');
        appData.screens = prompt('Какие типы экранов нужно разработать?',"Простые, Сложные, Интерактивные");
        
        do {
          appData.screenPrice = prompt('Сколько будет стоить данная работа?', '12000')
        } while (!appData.isNumber(appData.screenPrice))

       appData.adaptive = confirm('Нужен ли адаптив на сайте?');
      },
      getFullPrice: function(arg1, arg2) {
        return arg1 + arg2;
      },
      getAllServicePrices: function() {
        let sum,
            res = 0;

        for (let i = 0; i < 2; i++) {
          if (i === 0) {
            appData.service1 = prompt('Какой дополнительный тип услуги нужен?') 
          } else if (i === 1) {
            appData.service2 = prompt('Какой дополнительный тип услуги нужен?')
          };

          do {
            sum = prompt('Сколько это будет стоить?')
          } while (!appData.isNumber(sum))

          res = res + +sum
        };

        return res
      },
      getServicePercentPrices: function(arg1, arg2) {
        Math.ceil(arg1 - arg1 * (arg2/100))
      },
      getRollbackMessage: function(price) {
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
      getTitle: function(arg) {
        arg = arg.trim(); 
        arg = arg[0].toUpperCase() + arg.substring(1);
        return arg;
      },
      logger: function() {
        for (let key in appData) {
          console.log("Ключ:" + key + " " + "Значение:" + appData[key])
        }
      },
      start: function() {
        appData.asking();


        appData.allServicePrices = appData.getAllServicePrices(),
        appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices),
        appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);

        appData.logger();
      }
}



appData.start();

  