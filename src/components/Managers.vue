<template>
  <ul>
    <li v-for="manager in $store.state.managers.managers">
      {{ manager.firstName }} {{ manager.lastName }}
    </li>
  </ul>
</template>

<script>
export default {
    
}
</script>

