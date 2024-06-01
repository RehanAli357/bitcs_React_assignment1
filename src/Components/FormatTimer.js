export const formattedTime = (timer) => {
  const msec = timer % 100;
  const sec = Math.floor(timer / 100) % 60;
  const min = Math.floor(timer / 6000) % 60;
  const hr = Math.floor(timer / 360000);

  const format = (val) => (val >= 10 ? val : `0${val}`);
  return `${format(hr)} hr : ${format(min)} min : ${format(sec)} sec : ${format(
    msec
  )} msec`;
};
