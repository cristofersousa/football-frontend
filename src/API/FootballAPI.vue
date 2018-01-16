<template>
  <div id="footballAPI"></div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'

export default {
  name: 'footballAPI',
    components: {},
    methods: {

    },
    methods: {
      getbyId() {
        const url = 'http://api.football-data.org/v1/competitions/';
        const options = {
          headers : {
            'X-Auth-Token': 'c5f99f1e6401461d8c26e51c819e2098',
          }
        }
        return axios.get(url, options)
        .then(res => {
         let responseObject = res;
          return responseObject;
        })
        .catch(e => {
          this.errors.push(e)
        })
      },
      getAll(id) {
        const url = `http://api.football-data.org/v1/competitions/${id}/fixtures`;
        const options = {
          headers : {
            'X-Auth-Token': 'c5f99f1e6401461d8c26e51c819e2098',
          }
        }
        return axios.get(url, options)
        .then(res => {
         let responseObject = res;
          return responseObject;
        })
        .catch(e => {
          this.errors.push(e)
        })

      }

    }
}

</script>
