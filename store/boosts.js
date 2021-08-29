export const state = () => (
  [
    {
      liking: 100,
      from: "2020/09/10",
      to: "2020/09/10",
    },
    {
      liking: 100,
      from: "2020/09/10",
      to: "2020/09/10",
    },
  ]
)

export const mutations = {
  add(state, { id, from, to }) {
    console.log(id);
    state[id].liking++;
    state[id].from = from;
    state[id].to = to;
  }
}
