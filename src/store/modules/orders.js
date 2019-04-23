export default {
  state: {
    orders: [
      {
        managerId: "1",
        name: "Кольчуга",
        cost: 980,
        status: "Доставлено"
      },
      {
        managerId: "1",
        name: "Шлем",
        cost: 1050,
        status: "Доставлено"
      },
      {
        managerId: "1",
        name: "Конь",
        cost: 19870,
        status: "В работе"
      },
      {
        managerId: "1",
        name: "Меч",
        cost: 2500,
        status: "Заказ отправлен"
      },
      {
        managerId: "2",
        name: "Кольчуга",
        cost: 980,
        status: "Доставлено"
      },
      {
        managerId: "2",
        name: "Шлем",
        cost: 1050,
        status: "Доставлено"
      },
      {
        managerId: "2",
        name: "Конь",
        cost: 19870,
        status: "Доставлено"
      },
      {
        managerId: "2",
        name: "Меч",
        cost: 2500,
        status: "В работе"
      },
      {
        managerId: "2",
        name: "Картошка, печённая в углях",
        cost: 70,
        status: "Заказ отправлен"
      },
      {
        managerId: "3",
        name: "Кольчуга",
        cost: 980,
        status: "Доставлено"
      },
      ,
      {
        managerId: "3",
        name: "Шлем",
        cost: 1050,
        status: "Доставлено"
      },
      {
        managerId: "3",
        name: "Конь",
        cost: 19870,
        status: "В работе"
      },
      {
        managerId: "3",
        name: "Меч",
        cost: 2500,
        status: "В работе"
      },
      {
        managerId: "4",
        name: "Конь",
        cost: 19870,
        status: "В работе"
      },
      {
        managerId: "4",
        name: "Новый свистящий зуб",
        cost: 1590,
        status: "Заказ отклонён"
      },
      {
        managerId: "4",
        name: "Булава",
        cost: 1250,
        status: "Доставлено"
      },
      {
        managerId: "4",
        name: "Штаны",
        cost: 220,
        status: "Доставлено"
      },
      {
        managerId: "4",
        name: "Цыплёнок на вертеле",
        cost: 140,
        status: "Заказ отправлен"
      }
    ]
  },
  mutations: {
    createOrder (state, order) {
      state.orders.push(order);
    }
  },
  actions: {
    createOrder (context, order) {
      return new Promise((resolve, reject) => {
        if (!order.managerId) reject('Менеджер не указан!');
        order.status = "Принят к оформлению";
        context.commit('createOrder', order);
        resolve(order);
      })
    }
  },
  getters: {
    getManagerOrders: state => id => {
      return new Promise(res => {
        let data = state.orders.filter(o => {
          return o.managerId === id;
        });
        res(data);
      })
    }
  }
}