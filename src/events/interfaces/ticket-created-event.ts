import { Topics } from '../enums';
import { TicketData } from '../interfaces';

export interface TicketCreatedEvent {
  topic: Topics.TicketCreated;
  data: TicketData;
}
