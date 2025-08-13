import { createMock } from '@golevelup/ts-jest';

import { TEST_GET_STOCKS_MARSHALLED_RESPONSE, TEST_GET_STOCKS_RESPONSE } from './test-data';
import { GetStocksService } from '../get-stocks-service';
import { GetStocksDataProvider } from 'functionV3/persistence/providers/get-stocks-data-provider';

jest.mock('@avolta-ag/validator-utils', () => ({
  validateRequest: jest.fn((x) => x),
  IsOnlyOneRequiredFrom: jest.fn(() => (x) => x),
}));

describe('get-stocks-service', () => {
  const dataProviderMock = createMock<GetStocksDataProvider>();

  const prepareService = () => {
    dataProviderMock.getStocks.mockResolvedValue(TEST_GET_STOCKS_RESPONSE);

    return new GetStocksService(dataProviderMock);
  };

  it('should return unmarshalled response when unmarshallResponse is true', async () => {
    const service = prepareService();

    const result = await service.getStocks(
      { store_identifier: 'DPEUSNG' },
      { unmarshallResponse: true }
    );

    expect(result).toEqual(TEST_GET_STOCKS_RESPONSE);
  });

  it('should return marshalled response when unmarshallResponse is false', async () => {
    const service = prepareService();

    const result = await service.getStocks(
      { store_identifier: 'DPEUSNG' },
      { unmarshallResponse: false }
    );

    expect(result).toEqual(TEST_GET_STOCKS_MARSHALLED_RESPONSE);
  });
});
