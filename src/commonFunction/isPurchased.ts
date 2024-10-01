import { PurchaseItemProps } from "../interface/payment_props";

export function isPurchased(
  purchaseItemProps: PurchaseItemProps[],
  { id, type }: { id: string; type: number }
): boolean {
  return purchaseItemProps?.some(
    (purchaseItem: PurchaseItemProps) =>
      purchaseItem?.id === id && purchaseItem?.type === type
  );
}
