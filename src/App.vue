<template>
  <div id="app">
    <router-view></router-view>
    
    <FootView></FootView>
    
  </div>
</template>

<script>
import FootView from './components/foot/FootView'
export default {
  components:{
    FootView
  }

}
</script>


