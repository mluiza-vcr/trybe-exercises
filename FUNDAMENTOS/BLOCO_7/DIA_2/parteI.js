const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;

  console.log (`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${phoneNumber}, R: ${street}, Nº: ${number}, AP: ${apartment}`);
} 

customerInfo(order);

const orderModifier = (order) => {
  const newCustomer = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const newPrice = order.payment.total = 50;

  console.log (`Olá ${newCustomer}, o total do seu pedido de ${pizzas} e ${drink} é R$ ${newPrice}`)
}

orderModifier(order);