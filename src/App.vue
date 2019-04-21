<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu mode="horizontal" router>
          <el-menu-item index="/managers">
            Менеджеры
          </el-menu-item>
          <el-menu-item index="/orders">
            Заказы
          </el-menu-item>
          <el-menu-item index="/orders/new">
            Оформить заказ
          </el-menu-item>
          <el-menu-item index="4">
            Войти
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
