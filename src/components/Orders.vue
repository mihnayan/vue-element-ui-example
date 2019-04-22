<template>
  <el-table
      :data="orders"
      :default-sort="{prop: 'cost', order: 'descending'}">
    <el-table-column prop="name" label="Заказ" sortable></el-table-column>
    <el-table-column prop="cost" label="Стоимость" sortable></el-table-column>
    <el-table-column prop="status" label="Статус заказа"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
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
    fetchOrders (managerId) {
      if (managerId) {
        this.orders = this.$store.getters.getManagerOrders(managerId);
      } else {
        this.orders = this.$store.getters.getAllOrders;
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.fetchOrders(to.params.id);
    }
  },
  created () {
    this.fetchOrders(this.$route.params.id);
  }
}
</script>

