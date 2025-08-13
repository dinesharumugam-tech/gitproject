import 'reflect-metadata';
import 'source-map-support/register';

import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { Container } from 'typedi';
import { handleResponseError } from '@avolta-ag/error-handling-utils';
import { instrumentHandler } from '@avolta-ag/infrastructure-utils';

import { ConfigurationService } from 'commonV3/services/configuration-service';
import { ALLOWED_ORIGINS, API_GATEWAY_CORS_HEADERS } from 'commonV3';
import { GetStockDeltaService } from './get-stock-delta-service';
import { GetStocksPathParameters, GetStocksQueryParameters } from '../get-stocks/types';

const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  global.traceIdForRequest = context.awsRequestId;

  const service = Container.get(GetStockDeltaService);
  const configurationService = Container.get(ConfigurationService);
  const origin = event.headers.Origin ?? event.headers.origin;

  try {
    const requestPathParameters = event.pathParameters as unknown as GetStocksPathParameters;
    const requestQueryParameters = (event.queryStringParameters ??
      {}) as unknown as GetStocksQueryParameters;

    const response = await service.getStockDelta(requestPathParameters, requestQueryParameters);

    return {
      statusCode: 200,
      headers: API_GATEWAY_CORS_HEADERS(configurationService.stage),
      body: JSON.stringify(response),
    };
  } catch (error) {
    return handleResponseError(error, { origin, allowedOrigins: ALLOWED_ORIGINS });
  }
};

const instrumentedHandler = instrumentHandler(handler);

export { handler, instrumentedHandler };
