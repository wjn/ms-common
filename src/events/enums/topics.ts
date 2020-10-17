export enum Topics {
  // tickets
  TicketCreated = 'ticket:created',
  TicketUpdated = 'ticket:updated',
  OrderCreated = 'order:created',
  // will handle order statuses of
  // CanceledByUser, CanceledExpired, CanceledUnavailable
  OrderCanceled = 'order:canceled',
}
