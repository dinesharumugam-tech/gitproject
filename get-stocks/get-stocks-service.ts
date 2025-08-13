import { Service } from 'typedi';
import { validateRequest } from '@avolta-ag/validator-utils';
import { marshall } from '@aws-sdk/util-dynamodb';

import { GetStocksDataProvider } from 'functionV3/persistence/providers/get-stocks-data-provider';
import { GetStocksPathParameters, GetStocksQueryParameters } from './types';
import { GetStocksMarshalledResponse } from './types/get-stocks-marshalled-response';
import { GetStocksResponse } from './types/get-stocks-response';

@Service()
export class GetStocksService {
  constructor(private readonly dataProvider: GetStocksDataProvider) {}

  public async getStocks(
    pathParams: GetStocksPathParameters,
    queryParams: GetStocksQueryParameters
  ): Promise<GetStocksResponse | GetStocksMarshalledResponse> {
    const validatedPathParams = await validateRequest(pathParams, GetStocksPathParameters);
    const validatedQueryParams = await validateRequest(queryParams, GetStocksQueryParameters);

    const result = await this.dataProvider.getStocks(
      validatedQueryParams,
      validatedPathParams.store_identifier
    );

    return validatedQueryParams.unmarshallResponse
      ? result
      : ({
          Items: result.Items?.map((x) => marshall(x)),
          Count: result.Count,
          ScannedCount: result.ScannedCount,
          LastEvaluatedKey: result.LastEvaluatedKey ? marshall(result.LastEvaluatedKey) : undefined,
        } as GetStocksMarshalledResponse);
  }
}
