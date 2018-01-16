export default {
  getAllCompetitions:(state, payload) => {
    state.competitions = payload
    state.allCompetitions = payload
  },
  filterCompetitions:(state, payload) => {
    if (payload === '') {
      let newState = state.allCompetitions;
      state.competitions = newState;
    } else {
    let newState = state.competitions.filter(competition  => {
        return competition.id == payload;
    });
    state.competitions = newState;
    }
  },
  getFixtures:(state,payload) => {
    state.teamRankings = payload;
  },
}
