import { createMock } from '@golevelup/ts-jest';

import {
  TEST_GET_STOCK_DELTA_MARSHALLED_RESPONSE,
  TEST_GET_STOCK_DELTA_RESPONSE,
} from './test-data';
import { GetStockDeltaService } from '../get-stock-delta-service';
import { GetStockDeltaDataProvider } from 'functionV3/persistence/providers/get-stock-delta-data-provider';

jest.mock('@avolta-ag/validator-utils', () => ({
  validateRequest: jest.fn((x) => x),
  IsOnlyOneRequiredFrom: jest.fn(() => (x) => x),
}));

describe('get-stocks-service', () => {
  const dataProviderMock = createMock<GetStockDeltaDataProvider>();

  const prepareService = () => {
    dataProviderMock.getStockDelta.mockResolvedValue(TEST_GET_STOCK_DELTA_RESPONSE);

    return new GetStockDeltaService(dataProviderMock);
  };

  it('should return unmarshalled response when unmarshallResponse is true', async () => {
    const service = prepareService();

    const result = await service.getStockDelta(
      { store_identifier: 'DPEUSNG' },
      { unmarshallResponse: true }
    );

    expect(result).toEqual(TEST_GET_STOCK_DELTA_RESPONSE);
  });

  it('should return marshalled response when unmarshallResponse is false', async () => {
    const service = prepareService();

    const result = await service.getStockDelta(
      { store_identifier: 'DPEUSNG' },
      { unmarshallResponse: false }
    );

    expect(result).toEqual(TEST_GET_STOCK_DELTA_MARSHALLED_RESPONSE);
  });
});
