import { LogType } from '../enums/LogType';
class LogIt {
  private type: LogType = LogType.INFO;
  private msg: string | object = '';

  // outputs to the console --> logger-it
  out(type: LogType, msg: string | object) {
    this.type = type;
    this.msg = msg;
    let prefix = `[${this.type}]`;
    if (typeof msg === 'object') {
      console.log(prefix, this.msg);
    } else {
      console.log(`${prefix} ${this.msg}`);
    }
  }
}

export const logIt = new LogIt();
