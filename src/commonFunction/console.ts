export const consoleLog = (name: string, value: any) => {
  if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
    return console.log(name, value);
  } else {
    return;
  }
};
