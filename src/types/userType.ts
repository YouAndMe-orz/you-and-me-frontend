export enum TelecomProvider {
  KT = "KT",
  SKT = "SKT",
  LG = "LG",
  KT_MVNO = "KT_MVNO",
  SKT_MVNO = "SKT_MVNO",
  LG_MVNO = "LG_MVNO",
}

export const TelecomProviderLabelMap: { [key in TelecomProvider]: string } = {
  [TelecomProvider.KT]: "KT",
  [TelecomProvider.SKT]: "SKT",
  [TelecomProvider.LG]: "LG U+",
  [TelecomProvider.KT_MVNO]: "KT 알뜰폰",
  [TelecomProvider.SKT_MVNO]: "SKT 알뜰폰",
  [TelecomProvider.LG_MVNO]: "LG 알뜰폰",
};

export const telecomOptions = Object.entries(TelecomProviderLabelMap).map(([value, label]) => ({
  value: value as TelecomProvider,
  label,
}));

export type RegisterInputs = {
  name: string;
  phone: string;
  telecom: TelecomProvider;
  residentNumber: string;
};
