export type GetStocksMarshalledResponse = {
  Items?: {
    StockAvailableQuantity: { N: string };
    HfmStoreCode: { S: string };
    StockQuantity: { N: string };
    GlobalItemDesc: { S: string };
    GlobalItemCode: { S: string };
    ExpiryDate: { N: string };
    StockDate: { N: string };
    CompanyCode: { S: string };
    StockReservedQuantity: { N: string };
    HfmCompanyCode: { S: string };
    GlobalStoreDesc: { S: string };
    LocalItemCode: { S: string };
    StoreIdentifier: { S: string };
    ExportTimestamp: { N: string };
    GlobalStoreCode: { S: string };
    StockType: { S: string };
  }[];
  Count?: number;
  ScannedCount?: number;
};
