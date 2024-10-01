export const dateFormate = (date: string | undefined): string | undefined => {
  if (!date) {
    return undefined;
  }

  const inputDate = date;
  const parts = inputDate.split(" ");
  const datePart = parts[0];
  const formattedDate = datePart.split("/").reverse().join("-");

  return formattedDate;
};
