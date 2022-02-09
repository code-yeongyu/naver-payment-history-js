export enum StatusGroup {
  PAYMENT_WAITING = "PAYMENT_WAITING",
  PAYMENT_COMPLETED = "PAYMENT_COMPLETED",
  DELIVERY_PREPARING_OR_DELIVERING = "DELIVERY_PREPARING_OR_DELIVERING",
  DELIVERED = "DELIVERED",
  PURCHASE_CONFIRMED = "PURCHASE_CONFIRMED",
  CANCEL = "CANCEL",
  REFUND = "REFUND",
  EXCHANGE = "EXCHANGE",
}

export enum StatusGroupText {
  ALL = "전체",
  PAYMENT_WAITING = "결제대기중",
  PAYMENT_COMPLETED = "결제완료",
  DELIVERY_PREPARING_OR_DELIVERING = "배송준비중/배송중",
  DELIVERED = "배송완료",
  PURCHASE_CONFIRMED = "구매확정",
  CANCEL = "취소",
  REFUND = "반품",
  EXCHANGE = "교환",
}
