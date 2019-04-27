export const STORE_TEAM = (state, payload) => {
  state.team.push(payload)
}

export const CLEAR_TEAM = (state) => {
  state.team = []
}

export const STORE_TEAM_MEMBER = (state, payload) => {
  state.teamMember = payload
}
