<template>
  <div id="navbar">
    <header class=" ">
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                <img alt="Brand"
                width="140"
                height="50"
                src="http://www.way2.com.br/wp-content/themes/way2/images/logo-way2.png">
              </a>
            </div>
          </div>
        </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">

.navbar-default {
    background-color: #1d252b;
    border-color: transparent;
}

.navbar {
    position: fixed;
    min-height: 70px;
    margin-bottom: 20px;
    border-bottom: 1px solid #A0AECC;
}


</style>
