const order = {
  customer: {
    name: "lola",
    address: {
      number: 4
    }
  }
};

const result = order.customer.address.city?.value;
console.log(result);