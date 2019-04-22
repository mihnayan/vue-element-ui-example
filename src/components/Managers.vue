<template>
<el-row>
  <el-col :span="6">
    <el-menu router>
      <el-menu-item
          v-for="manager in $store.state.managers.managers"
          :key="manager.id"
          v-bind:index="'/managers/' + manager.id">

        {{ manager.firstName }} {{ manager.lastName }}
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="18">
    <router-view></router-view>
      
    <el-card class="box-card">
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
    
}
</script>

