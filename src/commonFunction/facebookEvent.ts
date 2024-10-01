export declare const fbq: Function;

export const facebookEvent = (eventName: string, eventData?: any) => {
  return fbq("track", eventName, eventData);
};
