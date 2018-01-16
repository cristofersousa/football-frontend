export default {
  getAllCompetitions:( context, payload) => {
    context.commit('getAllCompetitions', payload)
  },

  filterCompetitions:(context, payload) => {
    context.commit('filterCompetitions', payload)
  },
  rollbackCompetitions: (context) => {
    context.commit('rollbackCompetitions')
  },
  getAllFixtures:(context,payload) => {
    context.commit('getFixtures', payload)
  },
}
