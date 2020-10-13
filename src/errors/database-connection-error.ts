import { CustomError } from './custom-error';

export class DataBaseConnectionError extends CustomError {
  statusCode = 500;
  constructor(public msg: string = 'Error connecting to database') {
    super(msg);

    // when trying to extending a built in class we have to do this:
    Object.setPrototypeOf(this, DataBaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.msg }];
  }
}
