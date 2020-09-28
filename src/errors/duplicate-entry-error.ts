import { CustomError } from './custom-error';

export class DuplicateEntryError extends CustomError {
  statusCode = 409;

  constructor(public msg: string = 'Duplicate entry') {
    super(msg);
    Object.setPrototypeOf(this, DuplicateEntryError.prototype);
  }

  serializeErrors() {
    return [{ message: this.msg }];
  }
}
