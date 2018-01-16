<template>
  <div id="search" class="bg__search">
    <div class="row">
      <div class="col-md-12">
        <h1>
            See the result of your champions
        </h1>
        <p> Find the total of wins, draws, losses and total points your team has won. </p>
      </div>
      </div>
       <div class="row row__align">
      <div class="col-md-8 col-xs-12">
        <div class="input-group">
          <input tabindex="1"
            v-model="id"
           @keyup.enter="findById()"
            type="text"
            class="form-control search__input"
            placeholder="Find your team, insert code..."
            aria-describedby="search">
          <span tabindex="2"
            class="input-group-addon search__icon"
            @click="findById()"
            id="search">
            <i class="fa fa-search icon" aria-hidden="true" @keyup.enter="findById()"></i>
          </span>
        </div>
        </div> <!-- /col-md-8-->
        <div class="col-md-4 col-xs-12">
         <p class="text-right">
           <button
            tabindex="3"
            @click="findAllTeam()"
            class="btn btn-primary btn__reset">
            <i class="fa fa-list" aria-hidden="true"></i>
            See All Champions
          </button>
          </p>
        </div>
      </div>
      <loading v-show="visibility"></loading>
    </div>

</template>

<script>

import FootBallAPI from './../API/FootballAPI.vue'
import Loading from './../shared/Loading.vue'

export default {
  name: 'search',
  components: {
    Loading,
  },
  data () {
    return {
      id: '',
      visibility: false,
    }
  },
  methods: {
    initTeam(teamName, result){
      if(typeof result[teamName] === 'undefined'){
        result[teamName] = {
          wins: 0,
          looses: 0,
          draw: 0,
          points: 0,
        };
      }
    },
    getHalfTimeGoals(halfTime, team) {
      if (halfTime) {
        return halfTime[team];
      }
      return 0;
    },

    getTotalGoals(fixture) {
      return {
        homeTeam: fixture.result.goalsHomeTeam + this.getHalfTimeGoals(fixture.result.halfTime, 'goalsHomeTeam') ,
        awayTeam: fixture.result.goalsAwayTeam + this.getHalfTimeGoals(fixture.result.halfTime, 'goalsAwayTeam') ,
      }
    },

    findById() {
      this.visibility = true;
       FootBallAPI.methods.getAll(this.id)
        .then(res => {
          this.$store.dispatch('getAllCompetitions', res.data)
          const fixtures = res.data.fixtures;
          const result = fixtures.reduce((result,fixture,index) => {

            const awayTeamName = fixture.awayTeamName;
            const homeTeamName = fixture.homeTeamName;
            const totalGoals =  this.getTotalGoals(fixture);

            this.initTeam(awayTeamName, result);
            this.initTeam(homeTeamName, result);
            this.computeGameResult(awayTeamName, homeTeamName, totalGoals,result);
            return result;
          },{})
          this.$store.dispatch('getAllFixtures', this.getRanking(result))
          this.$emit('hasSearched');
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            this.visibility = false;
        });
    },

    getRanking(result) {
      return Object.keys(result).map(teamName => {
        result[teamName].name = teamName;
        return result[teamName];
      }).sort((a, b) => {
        if (a.points > b.points) {
            return -1;
          } else if (b.points > a.points) {
            return 1
          }
        return 0;
      })
    },

    computeGameResult(awayTeamName, homeTeamName, totalGoals,result){
        let homeTeamResult = 'draw';
        let awayTeamResult = 'draw';
        const homeTeam = result[homeTeamName];
        const awayTeam = result[awayTeamName]
        if (totalGoals.homeTeam > totalGoals.awayTeam) {
            homeTeamResult = 'wins'
            awayTeamResult = 'looses'
            this.addPoints(homeTeam, 3);
        } else if(totalGoals.homeTeam < totalGoals.awayTeam) {
            homeTeamResult = 'looses'
            awayTeamResult = 'wins'
            this.addPoints(awayTeam, 3);
        } else {
           this.addPoints(awayTeam, 1);
           this.addPoints(homeTeam, 1);
        }
        awayTeam[awayTeamResult]++;
        homeTeam[homeTeamResult]++;
    },

    addPoints(obj,countPoints) {
       obj.points += countPoints;
    },

    findAllTeam() {
      let vueInstance = this;
      this.visibility = true;
      this.id = '';
        FootBallAPI.methods.getbyId()
        .then(res => {
          vueInstance.$store.dispatch('getAllCompetitions', res.data)
          vueInstance.$emit('showAllTeams');
        }).catch(err => {
          console.log(err)
        }).finally(() => {
          this.visibility = false;
        });
    },
  }
}

</script>

<style lang="scss">
  .bg__search {
    background: #1D252A;
    min-height: 30vh;
    padding: 20px;
    margin: 0 0 20px 0;
  }

  h1 {
    color: #2499df;
    font-size: 3em;
    font-family: 'Raleway', sans-serif;
  }

  p {
    color: #f4c300;
    font-size: 1.3em;
    font-family: 'Raleway', sans-serif;
  }

  .search__input {
    height: 90px;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #eee;
    border-radius: 0;
    color: #fff;
    font-size: 1.8em;
    font-family: 'Raleway', sans-serif;
  }

  .search__icon {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #eee;
    border-radius: 0;
  }

  .icon {
    color: #f4c300;
    font-size: 2.4em;
    cursor: pointer;
  }

  .icon:hover {
     color: #009ae3;
  }

  .btn__reset {
    background: #009ae3;
    width: 300px;
    border-radius: 0;
    font-size: 1.1em;
    font-family: 'Raleway', sans-serif;
  }

  .btn__reset:hover {
    color: #f7c200;
    background-color: transparent;
    border-color: #f7c200;
  }

.form-control:focus {
    border-color: transparent;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px transparent, 0 0 8p transparent;
    box-shadow: inset 0 1px 1px transparent, 0 0 8px transparent;
    border-bottom: #f4c300 1px solid;
}

.input-group-addon:last-child {
    border-left: 0;
    outline: 0;
    border-bottom: 0;
}

@media screen and (min-width: 900px) {
  .row__align {
    display: flex;
    align-items: flex-end;
  }
}

@media screen and (max-width: 899px) {
  .btn__reset{
    margin-top: 30px;
  }

  h1 {
    color: #2499df;
    font-size: 2.5em;
    font-family: 'Raleway', sans-serif;
  }

}
</style>

