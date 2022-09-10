let   title,
      screens,
      screenPrice,
      adaptive,
      rollback = 1,
      service1, 
      servicePrice1, 
      service2,
      servicePrice2,
      allServicePrices,
      fullPrice,
      servicePercentPrice; 

      function getFullPrice(arg1, arg2) {
      return arg1 + arg2;
      }

const isNumber = (num) => {
        return !isNaN(parseFloat(num) && isFinite(num));
      },
      asking = () => {
        title = prompt('Как называется ваш проект?');
        screens = prompt('Какие типы экранов нужно разработать?',"Простые, Сложные, Интерактивные");
        
        do {
          screenPrice = prompt('Сколько будет стоить данная работа?', '12000')
        } while (!isNumber(screenPrice))

        adaptive = confirm('Нужен ли адаптив на сайте?');
      }, 
      getAllServicePrices = () => {
        let sum,
            res = 0;

        for (let i = 0; i < 2; i++) {
          if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?') 
          } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?')
          };

          do {
            sum = prompt('Сколько это будет стоить?')
          } while (!isNumber(sum))

          res = res + +sum
        };

        console.log(res);
        return res
      }, 
      getServicePercentPrices = (arg1, arg2) => {
        Math.ceil(arg1 - arg1 * (arg2/100))
      },
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


      asking();

      allServicePrices = getAllServicePrices(),
      fullPrice = getFullPrice(screenPrice, allServicePrices),
      servicePercentPrice = getServicePercentPrices(fullPrice, rollback);


      showTypeOf(title)
      showTypeOf(adaptive)
      showTypeOf(fullPrice)      

      console.log(getRollbackMessage(fullPrice));
      console.log(getServicePercentPrices());
      console.log(screens.toLocaleLowerCase().split(","));
