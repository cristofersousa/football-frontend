<template>
  <div id="card">
    <div class="row mb-3">
                <div class="col-xl-3 col-sm-3">
                    <div class="card bg__card text-white h-100">
                        <div class="card-body">
                            <div class="rotate">
                             <i class="fa fa-thumbs-up fa-3x" aria-hidden="true"></i>

                            </div>
                            <h6 class="text-uppercase">Total de Vitórias</h6>
                            <h1 class="display-4">134</h1>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-3">
                    <div class="card text-white bg__card h-100">
                        <div class="card-body ">
                            <div class="rotate">
                           <i class="fa fa-thumbs-down  fa-3x" aria-hidden="true"></i>


                            </div>
                            <h6 class="text-uppercase">Total de Derrotas</h6>
                            <h1 class="display-4">87</h1>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-3">
                    <div class="card text-white bg__card h-100">
                        <div class="card-body">
                            <div class="rotate">
                                <i class="fa fa-hand-rock-o fa-3x" aria-hidden="true"></i>

                            </div>
                            <h6 class="text-uppercase">Empates </h6>
                            <h1 class="display-4">125</h1>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-3">
                    <div class="card text-white bg__card h-100">
                        <div class="card-body">
                            <div class="rotate">
                               <i class="fa fa-line-chart fa-3x" aria-hidden="true"></i>

                            </div>
                            <h6 class="text-uppercase">Pontos </h6>
                            <h1 class="display-4">36</h1>
                        </div>
                    </div>
                </div>
            </div>
            <!--/row-->
  </div>
</template>

<script>

export default {
  name: 'card',
  props: [],
  components: {
  },
  data () {
    return {
      games: [],
      errors: [],
    }
  },
}
</script>

<style lang="scss">
 .bg__card {
    background-color: #1d252b;
    margin-bottom: 20px;
    padding: 10px;
 }

 .rotate {
    color: #f1c40f;
    text-align: center;
 }

  .text-uppercase {
    color: #F1C40E;
    text-align: center;
  }

 .display-4 {
   color:#3498db;
   text-align: center;
 }
</style>

