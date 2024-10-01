import {
  Amex,
  Discover,
  Mastercard,
  UnionPay,
  Visa,
  JCB,
} from "@/src/assets/commonIcon";

export function getCardIconSvg(brand: string) {
  const cards: Record<string, any> = {
    visa: Visa,
    mastercard: Mastercard,
    amex: Amex,
    discover: Discover,
    jcb: JCB,
    unionpay: UnionPay,
  };
  return cards[brand];
}
