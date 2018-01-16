<template>
  <div id="app">
    <navbar></navbar>
      <div class="container-fluid">
        <results></results>
    </div>
  </div>
</template>

<script>

import Navbar from './general/Navbar.vue';
import Results from './general/Content.vue';

export default {
  name: 'app',
  components:{
    Navbar,
    Results,
  },
  data () {
    return {

    }
  },

}
</script>

<style lang="scss">
  body {
    background-color: #F3F4F8;
    padding-top: 70px;
  }

</style>
