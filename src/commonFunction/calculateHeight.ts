export const calculateHeight = (
  width: number,
  height: number,
  newWidth: number
) => {
  return (height / width) * newWidth;
};
