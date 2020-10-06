import { LogType } from '../enums/LogType';
class LogIt {
  private type: LogType = LogType.INFO;
  private msg: string = '';

  // outputs to the console --> logger-it
  out(type: LogType, msg: string) {
    this.type = type;
    this.msg = msg;
    console.log(`[${this.type}] ${this.msg}`);
  }
}

export const logIt = new LogIt();
