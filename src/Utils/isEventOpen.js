export const isEventOpen = ({ schedule }) => {
  return schedule.seconds < Math.floor(Date.now() / 1000);
};
