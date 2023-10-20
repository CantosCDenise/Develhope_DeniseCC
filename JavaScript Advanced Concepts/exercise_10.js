const order = {
  customer: {
    name: "lola",
    address: {
      number: 4
    }
  }
};

const checkCity = order.customer.address.city?.value;
console.log(checkCity);