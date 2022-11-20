export default {
  request(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    return state.request.filter((req) => req.coachId === coachId);
  },
  hasRequests(_, getters) {
    return getters.request && getters.request.length > 0;
  },
};
