export const run = ({ issue, transition: { from, to } }) => {
  return {
    result: false,
    errorMessage: `Issue ${issue.key} is not ready for transition from status ${from.id} to ${to.id}`,
  }
};