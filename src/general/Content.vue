<template>
  <div id="content" class="col80">

    <search @hasSearched="hasSearched()" @showAllTeams="showAllTeams()">
    </search>

    <div v-show="showRanking" class="row card__list">
      <div class="row">
        <div class="col-md-12">

          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th> Name </th>
                <th> Wins</th>
                <th> Looses </th>
                <th> Draw</th>
                <th> Points</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="teamRanking of $store.state.teamRankings" :key="teamRanking.id">
                <td> {{ teamRanking.name }}</td>
                <td> {{ teamRanking.wins }}</td>
                <td> {{ teamRanking.looses }}</td>
                <td> {{ teamRanking.draw }}</td>
                <td> {{ teamRanking.points }}</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!--/v-show ranking-->

    <div
      v-show="!showRanking" class="row card__list"
      v-for="game of $store.state.competitions"
      :key="game.id">
      <div class="col-md-1">
        <span class="card__id">
          <i class="fa fa-address-card-o" aria-hidden="true"></i>
        </span>
      </div>
      <div class="col-md-4">
        <p>
          ID:{{ game.id }}
          <br> {{ game.caption }}
        </p>
      </div>
    </div>
    <!--/v-show champions-->
  </div>
</template>
<script>
  import FootBallAPI from './../API/FootballAPI.vue'
  import Search from './../shared/Search.vue'
  import Card from './../shared/Card.vue'

  export default {
    name: 'content',
    components: {
      Search,
      Card
    },
    data() {
      return {
        errors: [],
        showRanking: false,
      }
    },
    computed: {
      user() {
        const {
          name,
          email
        } = this.$store.state.user;
        return `o Usuario logado é ${name} e possui o email ${email}.`
      },
      teamRanking() {
        return this.$store.state.teamRanking;
      }
    },
    mounted() {
      let vueInstance = this;
      FootBallAPI.methods.getbyId()
        .then(res => {
          vueInstance.$store.dispatch('getAllCompetitions', res.data);
          this.showRanking = false;
          //vueInstance.$store.getters.getByIdCompetition(this.id);
        })
        .catch(err => {
          console.log('error', err);
        });
    },
    methods: {
      hasSearched() {
        console.log('cliquei');
        this.showRanking = true
      },
      showAllTeams() {
        console.log('allteams');
        this.showRanking = false
      }
    },
  }

</script>


<style lang="scss">
  .col80 {
    width: 100%;
    padding: 20px;
  }

  .card__list {
    background: #fff;
    border: 1px solid #ddd;
    margin-bottom: 16px;
    border-left: 2px solid #4a8cc4;
    padding: 15px;
  }

  .card__id {
    font-size: 3em;
    font-family: 'Raleway', sans-serif;
    color: #777;
  }

  .card__list p {
    color: #777;
    font-family: 'Raleway', sans-serif;
    font-size: 1.2em;
  }

</style>
