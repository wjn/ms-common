export enum Topics {
  // tickets
  TicketCreated = 'ticket:created',
  TicketUpdated = 'ticket:updated',
  OrderCreated = 'order:created',
  // will handle order statuses of
  // CanceledByUser, CanceledUnavailable
  OrderCanceled = 'order:canceled',
  OrderExpired = 'order:expired',
}
