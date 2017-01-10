<template>
  <div id="app">
    <VueNav></VueNav>
    
    <div class="container">
      <div class="row">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import VueNav from './includes/VueNav'

export default {
  name: 'app',
  components: {
    VueNav
  },
  mounted: function() {
    //console.log("hello");
  }
}
</script>

<style>

</style>
