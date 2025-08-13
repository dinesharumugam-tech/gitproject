import { GetStocksMarshalledResponse, GetStocksResponse } from '../../get-stocks/types';

export const TEST_GET_STOCK_DELTA_MARSHALLED_RESPONSE: GetStocksMarshalledResponse = {
  Items: [
    {
      CompanyCode: {
        S: 'DPE',
      },
      ExpiryDate: {
        N: '1749112307',
      },
      ExportTimestamp: {
        N: '20250505083140',
      },
      GlobalItemCode: {
        S: '1000140',
      },
      GlobalItemDesc: {
        S: 'R Martin VSOP 40% 100cl',
      },
      GlobalStoreCode: {
        S: 'DPEUSA0030015',
      },
      GlobalStoreDesc: {
        S: 'EWR Newark Concourse 2 (USNG)',
      },
      HfmCompanyCode: {
        S: '6002',
      },
      HfmStoreCode: {
        S: '6002_05',
      },
      LocalItemCode: {
        S: '1000140',
      },
      StockAvailableQuantity: {
        N: '2',
      },
      StockDate: {
        N: '20250504',
      },
      StockQuantity: {
        N: '2',
      },
      StockReservedQuantity: {
        N: '0',
      },
      StoreIdentifier: {
        S: 'DPEUSNG',
      },
      StockType: {
        S: 'I',
      },
    },
    {
      StockAvailableQuantity: {
        N: '2',
      },
      HfmStoreCode: {
        S: '6002_05',
      },
      StockQuantity: {
        N: '2',
      },
      GlobalItemDesc: {
        S: 'Talisker 10YO 45.8% 100CL',
      },
      GlobalItemCode: {
        S: '1000019',
      },
      ExpiryDate: {
        N: '1749112307',
      },
      StockDate: {
        N: '20250504',
      },
      CompanyCode: {
        S: 'DPE',
      },
      StockReservedQuantity: {
        N: '0',
      },
      HfmCompanyCode: {
        S: '6002',
      },
      GlobalStoreDesc: {
        S: 'EWR Newark Concourse 2 (USNG)',
      },
      LocalItemCode: {
        S: '1000019',
      },
      StoreIdentifier: {
        S: 'DPEUSNG',
      },
      ExportTimestamp: {
        N: '20250505083150',
      },
      GlobalStoreCode: {
        S: 'DPEUSA0030015',
      },
      StockType: {
        S: 'F',
      },
    },
  ],
  Count: 2,
  ScannedCount: 2,
};

export const TEST_GET_STOCK_DELTA_TYPE_MARSHALLED_RESPONSE: GetStocksMarshalledResponse = {
  Items: [
    {
      CompanyCode: {
        S: 'DPE',
      },
      ExpiryDate: {
        N: '1749112307',
      },
      ExportTimestamp: {
        N: '20250505083140',
      },
      GlobalItemCode: {
        S: '1000140',
      },
      GlobalItemDesc: {
        S: 'R Martin VSOP 40% 100cl',
      },
      GlobalStoreCode: {
        S: 'DPEUSA0030015',
      },
      GlobalStoreDesc: {
        S: 'EWR Newark Concourse 2 (USNG)',
      },
      HfmCompanyCode: {
        S: '6002',
      },
      HfmStoreCode: {
        S: '6002_05',
      },
      LocalItemCode: {
        S: '1000140',
      },
      StockAvailableQuantity: {
        N: '2',
      },
      StockDate: {
        N: '20250504',
      },
      StockQuantity: {
        N: '2',
      },
      StockReservedQuantity: {
        N: '0',
      },
      StoreIdentifier: {
        S: 'DPEUSNG',
      },
      StockType: {
        S: 'I',
      },
    },
  ],
  Count: 1,
  ScannedCount: 2,
};

export const TEST_GET_STOCK_DELTA_RESPONSE: GetStocksResponse = {
  Items: [
    {
      StockAvailableQuantity: 2,
      HfmStoreCode: '6002_05',
      StockQuantity: 2,
      GlobalItemDesc: 'R Martin VSOP 40% 100cl',
      GlobalItemCode: '1000140',
      ExpiryDate: 1749112307,
      StockDate: 20250504,
      CompanyCode: 'DPE',
      StockReservedQuantity: 0,
      HfmCompanyCode: '6002',
      GlobalStoreDesc: 'EWR Newark Concourse 2 (USNG)',
      LocalItemCode: '1000140',
      StoreIdentifier: 'DPEUSNG',
      ExportTimestamp: 20250505083140,
      GlobalStoreCode: 'DPEUSA0030015',
      StockType: 'I',
    },
    {
      StockAvailableQuantity: 2,
      HfmStoreCode: '6002_05',
      StockQuantity: 2,
      GlobalItemDesc: 'Talisker 10YO 45.8% 100CL',
      GlobalItemCode: '1000019',
      ExpiryDate: 1749112307,
      StockDate: 20250504,
      CompanyCode: 'DPE',
      StockReservedQuantity: 0,
      HfmCompanyCode: '6002',
      GlobalStoreDesc: 'EWR Newark Concourse 2 (USNG)',
      LocalItemCode: '1000019',
      StoreIdentifier: 'DPEUSNG',
      ExportTimestamp: 20250505083150,
      GlobalStoreCode: 'DPEUSA0030015',
      StockType: 'F',
    },
  ],
  LastEvaluatedKey: undefined,
  Count: 2,
  ScannedCount: 2,
};

export const TEST_GET_STOCK_DELTA_TYPE_RESPONSE: GetStocksResponse = {
  Items: [
    {
      StockAvailableQuantity: 2,
      HfmStoreCode: '6002_05',
      StockQuantity: 2,
      GlobalItemDesc: 'R Martin VSOP 40% 100cl',
      GlobalItemCode: '1000140',
      ExpiryDate: 1749112307,
      StockDate: 20250504,
      CompanyCode: 'DPE',
      StockReservedQuantity: 0,
      HfmCompanyCode: '6002',
      GlobalStoreDesc: 'EWR Newark Concourse 2 (USNG)',
      LocalItemCode: '1000140',
      StoreIdentifier: 'DPEUSNG',
      ExportTimestamp: 20250505083140,
      GlobalStoreCode: 'DPEUSA0030015',
      StockType: 'I',
    },
  ],
  LastEvaluatedKey: undefined,
  Count: 1,
  ScannedCount: 2,
};
