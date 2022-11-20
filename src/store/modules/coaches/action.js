export default {
  registerCoach(context, data) {
    const coachdata = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    context.commit("registerCoach", coachdata);
  },
};
