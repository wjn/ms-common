import { Topics } from '../enums/topics';
import { OrderData } from './order-data';

export interface ExpirationCompleteEvent {
  topic: Topics.ExpirationComplete;
  // leaving this as id to keep consistent.
  // it refers to order.id
  data: {
    id: string;
  };
}
