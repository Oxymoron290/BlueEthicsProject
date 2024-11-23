import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestContextService {
  private correlationId: string;

  setCorrelationId(correlationId: string) {
    this.correlationId = correlationId;
  }

  getCorrelationId(): string {
    return this.correlationId;
  }
}
