export const state = () => ({
  header: {
    title: "",
    sub_title: "",
    show_bmc: false,
    icon: '',
  },
});

export const mutations = {
  SET_HEADER(state, payload) {
    state.header = payload;
  },
};
