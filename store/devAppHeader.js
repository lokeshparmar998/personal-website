export const state = () => ({
  header:{
      title: '',
      sub_title: ''
  }
})

export const mutations = {
  SET_HEADER(state, payload) {
    state.header = payload
  },
}