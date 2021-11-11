export const state = () => ({
  header: {
    title: "",
    sub_title: "",
    show_bmc: false,
  },
});

export const mutations = {
  SET_HEADER(state, payload) {
    state.header = payload;
  },
};
