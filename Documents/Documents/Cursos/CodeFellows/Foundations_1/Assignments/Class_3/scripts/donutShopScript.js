//Define downtown shop
var downtownShop = {};

downtownShop.minCustomersHour = 8;
downtownShop.maxCustomersHour = 43;
downtownShop.avgDonutsCustomer = 4.50;


downtownShop.getCustomersDowntown = function () {
  return Math.random() * (downtownShop.minCustomersHour - downtownShop.maxCustomersHour) + downtownShop.minCustomersHour;
};

downtownShop.getNumberOfDonuts = function () {
  return downtownShop.getCustomersDowntown * downtownShop.avgDonutsCustomer;
};

console.log(downtownShop);
