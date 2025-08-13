import { Service } from 'typedi';
import { validateRequest } from '@avolta-ag/validator-utils';
import { marshall } from '@aws-sdk/util-dynamodb';

import { GetStockDeltaDataProvider } from 'functionV3/persistence/providers/get-stock-delta-data-provider';
import {
  GetStocksPathParameters,
  GetStocksQueryParameters,
  GetStocksMarshalledResponse,
  GetStocksResponse,
} from 'functionV3/features/get-stocks/types';

@Service()
export class GetStockDeltaService {
  constructor(private readonly dataProvider: GetStockDeltaDataProvider) {}

  public async getStockDelta(
    pathParams: GetStocksPathParameters,
    queryParams: GetStocksQueryParameters
  ): Promise<GetStocksResponse | GetStocksMarshalledResponse> {
    const validatedPathParams = await validateRequest(pathParams, GetStocksPathParameters);
    const validatedQueryParams = await validateRequest(queryParams, GetStocksQueryParameters);

    const result = await this.dataProvider.getStockDelta(
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
