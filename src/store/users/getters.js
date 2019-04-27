export const team = state => {
  const teamFunc = (type) => {
    return state.team
      .filter(member => member.type === type)
      .sort((a, b) => {
        return a.pos - b.pos
      })
  }
  return teamFunc
}
