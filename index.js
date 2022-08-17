var customerName = 'bob';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(customerName){
  bestCustomer = customerName;
}

const leastFavoriteCustomer = 'bobby';

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'bob';
}