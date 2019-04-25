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
          <el-menu-item v-if="loggedInfo === null" index="/login" class="username">
            Войти
          </el-menu-item>
          <el-menu-item v-else index="/profile" class="username">
            {{ loggedInfo.firstName }} {{ loggedInfo.lastName }}
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="content">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Managers from './components/Managers.vue'

export default {
  components: { Managers },
  computed: {
    loggedInfo () {
      let id = this.$store.state.managers.loggedManager;
      if (id === null) return id;
      return this.$store.getters.manager(id);
    }
  },
  created () {
    Promise.all([
      this.$store.dispatch('loadOrders'),
      this.$store.dispatch('loadManagers')])
      .then(result => console.info(result))
      .catch(error => console.error(error));
    this.$router.replace('/managers');
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.content {
  text-align: left;
}
.username {
  font-weight: bold;
}
</style>
