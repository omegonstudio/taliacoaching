export type MercadoPagoPreferenceItem = {
  title: string;
  description?: string;
  quantity: number;
  unit_price: number;
  currency_id: string;
};

export type MercadoPagoBackUrls = {
  success: string;
  pending: string;
  failure: string;
};

export type CreatePreferencePayload = {
  items: MercadoPagoPreferenceItem[];
  back_urls: MercadoPagoBackUrls;
  auto_return: "approved";
  external_reference: string;
};

export type MercadoPagoPreferenceResponse = {
  id: string;
  init_point: string;
  sandbox_init_point?: string;
};

export type CreatePreferenceResult = {
  preferenceId: string;
  initPoint: string;
};
