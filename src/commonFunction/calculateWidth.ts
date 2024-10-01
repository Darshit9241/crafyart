export const calculateWidth = (
  width: number,
  height: number,
  newWidth: number
) => {
  return (height / width) * newWidth;
};
