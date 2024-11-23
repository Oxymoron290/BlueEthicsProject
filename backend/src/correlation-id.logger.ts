import { Logger, Injectable, Scope } from '@nestjs/common';
import { RequestContextService } from './request-context.service';

@Injectable({ scope: Scope.TRANSIENT })
export class CorrelationIdLogger extends Logger {
  constructor(private readonly requestContextService: RequestContextService) {
    super();
  }

  private prependCorrelationId(message: any): string {
    const correlationId = this.requestContextService.getCorrelationId();
    return `[${correlationId}] ${this.stringifyMessage(message)}`;
  }

  private stringifyMessage(message: any): string {
    if (typeof message === 'object') {
      return JSON.stringify(message);
    }
    return message;
  }

  log(message: any, ...optionalParams: any[]) {
    super.log(this.prependCorrelationId(message), ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]) {
    const [trace, ...restParams] = optionalParams;
    if (trace) {
      super.error(this.prependCorrelationId(message), trace, ...restParams);
    } else {
      super.error(this.prependCorrelationId(message), ...optionalParams);
    }
  }

  warn(message: any, ...optionalParams: any[]) {
    super.warn(this.prependCorrelationId(message), ...optionalParams);
  }

  debug(message: any, ...optionalParams: any[]) {
    super.debug(this.prependCorrelationId(message), ...optionalParams);
  }

  verbose(message: any, ...optionalParams: any[]) {
    super.verbose(this.prependCorrelationId(message), ...optionalParams);
  }
}
