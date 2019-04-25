<template>
<el-row :gutter="10">
  <el-col :span="6">
    <el-menu router>
      <el-menu-item
          v-for="manager in $store.state.managers.allManagers"
          :key="manager.id"
          v-bind:index="'/managers/' + manager.id">

        {{ manager.firstName }} {{ manager.lastName }}
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="18">
    <el-alert
        v-if="!managerSelected"
        type="info"
        title="Выберите менеджера для отображения информации">
    </el-alert>

    <router-view v-if="managerSelected"></router-view>
    <div>&nbsp;</div>
    <el-card class="box-card" v-if="managerSelected">
      <div slot="header" class="clearfix">
        <strong>Список заказов</strong>
      </div>
      <div>
        <router-view name="orders"></router-view>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      managerSelected: false
    }
  },
  watch: {
    '$route' (to, from) {
      let managerId = to.params.id;
      this.managerSelected = managerId && this.$store.getters.manager(managerId);
    }
  }
}
</script>

