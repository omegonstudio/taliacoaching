export class MercadoPagoConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MercadoPagoConfigError";
  }
}

export class MercadoPagoApiError extends Error {
  readonly status: number;
  readonly body: string;

  constructor(message: string, status: number, body: string) {
    super(message);
    this.name = "MercadoPagoApiError";
    this.status = status;
    this.body = body;
  }
}
