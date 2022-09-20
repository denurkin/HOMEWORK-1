const appData = {
      title: "",
      screens: [], 
      screenPrice: 0,
      adaptive: true,
      rollback: 10,
      services: {},
      allServicePrices: 0,
      fullPrice: 0,
      servicePercentPrice: 0,
      isNumber: function(num) {
        return !isNaN(parseFloat(num) && isFinite(num));
      },
      asking: function() {
        do {
          appData.title = prompt('Как называется ваш проект?');
        } while (appData.isNumber(appData.title) || appData.title == "")

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');

        for (let i = 0; i < 2; i++) {
          let name;
          do {
            name = prompt('Какие типы экранов нужно разработать?');
          } while (appData.isNumber(name) || name == "")

          let price = 0;

        do {
          price = prompt('Сколько будет стоить данная работа?', '12000')
        } while (!appData.isNumber(price))

         appData.screens.push({id: i, name: name, price: price})
        }


       for (let i = 0; i < 2; i++) {
        let name;
        
        do {
          name = prompt('Какой дополнительный тип услуги нужен?');
        } while (appData.isNumber(name) || name == "")

        let price = 0;

        do {
          price = prompt('Сколько это будет стоить?')
        } while (!appData.isNumber(price))

        appData.services[name] = +price
      };
      },
      addPrices: function() {
        for (let screen of appData.screens) {
          appData.screenPrice += +screen.price
        }

        for (const key in appData.services) {
          appData.allServicePrices += appData.services[key]
      }
      },
      getFullPrice: function(arg1, arg2) {
        appData.fullPrice = +arg1 + +arg2;
      },
      getServicePercentPrices: function(arg1, arg2) {
        appData.servicePercentPrice = Math.ceil(+arg1 - arg1 * (arg2/100))
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
        // for (let key in appData) {
        //   console.log("Ключ:" + key + " " + "Значение:" + appData[key])
        // }

        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        console.log(appData.title);

      },
      start: function() {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.logger();
      }
}



appData.start();

  