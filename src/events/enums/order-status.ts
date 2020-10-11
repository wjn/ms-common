export enum OrderStatus {
  // When order has been created but
  // the ticket attempting to be ordered has not been reserved
  Created = 'created',

  // When the ticket the order is trying to reserve has ALREADY been reserved
  CanceledUnavailable = 'canceled:unavailable',

  // when the user cancels the order
  CanceledByUser = 'canceled:by-user',

  // when the order expires before payment.
  CanceledExpired = 'canceled:expired',

  // When the order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',

  // When the order has reserved the ticket and
  // the user has provided payment successfully
  Complete = 'complete',
}
