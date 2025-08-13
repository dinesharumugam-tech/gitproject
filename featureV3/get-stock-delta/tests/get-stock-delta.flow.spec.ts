import 'jest-dynalite/withDb';
import request from 'supertest';
import { InMemoryAuthorizationService } from '@avolta-ag/utils';

import { createApplication } from 'local/application';
import {
  TEST_GET_STOCK_DELTA_MARSHALLED_RESPONSE,
  TEST_GET_STOCK_DELTA_TYPE_MARSHALLED_RESPONSE,
} from './test-data';

describe('get stock delta endpoint', () => {
  const app = createApplication({
    authorizationService: new InMemoryAuthorizationService(),
  });

  it('should return success response', async () => {
    const response = await request(app).get('/v4/DPEUSNG/stockdelta/query');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(TEST_GET_STOCK_DELTA_MARSHALLED_RESPONSE);
  });

  it('should return success response with delta stock type', async () => {
    const queryParams = {
      stockType: 'I',
    };
    const response = await request(app).get('/v4/DPEUSNG/stockdelta/query').query(queryParams);

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(TEST_GET_STOCK_DELTA_TYPE_MARSHALLED_RESPONSE);
  });
});
