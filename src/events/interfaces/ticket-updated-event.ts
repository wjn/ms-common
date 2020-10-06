import { Topics } from '../enums';
import { TicketData } from '../interfaces';

export interface TicketUpdatedEvent {
  topic: Topics.TicketUpdated;
  data: TicketData;
}
