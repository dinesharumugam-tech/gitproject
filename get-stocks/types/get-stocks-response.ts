export type GetStocksResponse = {
  Items?: GetStocksResponseItem[];
  Count?: number;
  LastEvaluatedKey?: {
    StoreIdentifierStartKey: string;
    LocalItemCodeStartKey: string;
  };
  ScannedCount?: number;
};

export type GetStocksResponseItem = {
  StockAvailableQuantity: number;
  HfmStoreCode: string;
  StockQuantity: number;
  GlobalItemDesc: string;
  GlobalItemCode: string;
  ExpiryDate: number;
  StockDate: number;
  CompanyCode: string;
  StockReservedQuantity: number;
  HfmCompanyCode: string;
  GlobalStoreDesc: string;
  LocalItemCode: string;
  StoreIdentifier: string;
  ExportTimestamp: number;
  GlobalStoreCode: string;
  StockType: string;
};

export type GetStocksKey = {
  StoreIdentifierStartKey: string;
  LocalItemCodeStartKey: string;
};
