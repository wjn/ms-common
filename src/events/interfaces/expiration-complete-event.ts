import { Topics } from '../enums/topics';

export interface ExpirationCompleteEvent {
  topic: Topics.ExpirationComplete;
  data: {
    orderId: string;
  };
}
