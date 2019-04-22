<template>
  <el-table
      :data="orders"
      :default-sort="{prop: 'cost', order: 'descending'}">
    <el-table-column v-if="!managerId" prop="managerName" label="Менеджер" sortable></el-table-column>
    <el-table-column prop="name" label="Заказ" sortable></el-table-column>
    <el-table-column prop="cost" label="Стоимость" sortable></el-table-column>
    <el-table-column prop="status" label="Статус заказа"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      managerId: null,
      orders: [
        {
          name: '',
          cost: '',
          status: ''
        }
      ]
    }
  },
  methods: {
    fetchOrders () {
      if (this.managerId) {
        this.$store.getters.getManagerOrders(this.managerId)
            .then(data => {
              this.orders = data;
            })
      } else {
        let managersWithOrders = this.$store.getters.getAllManagersWithOrders
            .then(data => {
              data.forEach(m => {
                let managerName = m.firstName + ' ' + m.lastName;
                m.orders.forEach(o => {
                  o.managerName = managerName;
                  this.orders.push(o);
                })
              })
            });
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.managerId = to.params.id;
      this.fetchOrders();
    }
  },
  created () {
    this.managerId = this.$route.params.id;
    this.fetchOrders();
  }
}
</script>

