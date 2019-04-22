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
  data: function () {
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
  created: function () {
    let managerId = this.$store.getters.loggedManager;
    if (managerId) {
      this.orders = this.$store.getters.getManagerOrders(managerId);
    }
  }
}
</script>

